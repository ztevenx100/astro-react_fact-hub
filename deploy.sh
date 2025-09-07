#!/bin/bash

# 🚀 Deployment Script for Fact Hub
# Usage: ./deploy.sh [environment]
# Environments: dev, staging, prod

set -e

ENVIRONMENT=${1:-dev}
PROJECT_NAME="fact-hub"

echo "🚀 Starting deployment for $ENVIRONMENT environment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Validate environment
if [[ ! "$ENVIRONMENT" =~ ^(dev|staging|prod)$ ]]; then
    log_error "Invalid environment. Use: dev, staging, or prod"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    log_error "Vercel CLI is not installed. Run: npm i -g vercel"
    exit 1
fi

# Check if we're in the right directory
if [[ ! -f "vercel.json" ]]; then
    log_error "vercel.json not found. Run this script from the project root."
    exit 1
fi

# Pre-deployment checks
log_info "Running pre-deployment checks..."

# Check frontend dependencies
if [[ ! -d "frontend/node_modules" ]]; then
    log_warning "Frontend dependencies not found. Installing..."
    cd frontend && npm ci && cd ..
fi

# Check backend dependencies
if [[ ! -d "backend/node_modules" ]]; then
    log_warning "Backend dependencies not found. Installing..."
    cd backend && npm ci && cd ..
fi

# Run tests (if they exist)
log_info "Running tests..."
cd frontend && npm run test && cd ..
cd backend && npm run test && cd ..

# Build frontend
log_info "Building frontend..."
cd frontend && npm run build && cd ..
log_success "Frontend build completed"

# Deploy based on environment
case $ENVIRONMENT in
    "dev")
        log_info "Deploying to development..."
        vercel --env NODE_ENV=development
        ;;
    "staging")
        log_info "Deploying to staging..."
        vercel --prod --env NODE_ENV=staging
        ;;
    "prod")
        log_info "Deploying to production..."
        vercel --prod --env NODE_ENV=production
        ;;
esac

log_success "Deployment to $ENVIRONMENT completed!"

# Health check
log_info "Performing health check..."
sleep 10

case $ENVIRONMENT in
    "prod")
        if curl -f "https://$PROJECT_NAME.vercel.app/api/health" > /dev/null 2>&1; then
            log_success "Production health check passed!"
        else
            log_warning "Production health check failed. Check the deployment."
        fi
        ;;
    "staging")
        if curl -f "https://$PROJECT_NAME-staging.vercel.app/api/health" > /dev/null 2>&1; then
            log_success "Staging health check passed!"
        else
            log_warning "Staging health check failed. Check the deployment."
        fi
        ;;
esac

echo ""
log_success "🎉 Deployment completed successfully!"
echo ""
echo "📋 Next steps:"
case $ENVIRONMENT in
    "prod")
        echo "🌐 Production: https://$PROJECT_NAME.vercel.app"
        echo "🔍 API Health: https://$PROJECT_NAME.vercel.app/api/health"
        ;;
    "staging")
        echo "🌐 Staging: https://$PROJECT_NAME-staging.vercel.app"
        echo "🔍 API Health: https://$PROJECT_NAME-staging.vercel.app/api/health"
        ;;
    "dev")
        echo "🌐 Development preview URL will be shown above"
        ;;
esac
echo "📊 Vercel Dashboard: https://vercel.com/dashboard"
echo ""
