#!/bin/bash

# Environment Setup Script for Restroworks Frontend
# This script helps developers set up their local environment

echo "🚀 Setting up environment variables for Restroworks Frontend..."

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists. Skipping creation."
    echo "📝 Current .env.local contents:"
    cat .env.local
else
    echo "📝 Creating .env.local file..."
    
    # Create .env.local with default development values
    cat > .env.local << EOF
# Local Development Environment Variables
# This file is automatically loaded by Next.js in development

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:4000/api

# Optional: Enable analytics (default: false)
# NEXT_PUBLIC_ENABLE_ANALYTICS=true

# Note: Variables prefixed with NEXT_PUBLIC_ are exposed to the browser
# Only use NEXT_PUBLIC_ for variables that need to be accessible in client-side code
EOF

    echo "✅ .env.local created successfully!"
    echo "📝 Contents:"
    cat .env.local
fi

echo ""
echo "🔧 Next steps:"
echo "1. Review and modify .env.local if needed"
echo "2. Restart your development server: npm run dev"
echo "3. Verify the API connection works"
echo ""
echo "📚 For more information, see ENVIRONMENT_SETUP.md"
echo ""
echo "🎉 Environment setup complete!"
