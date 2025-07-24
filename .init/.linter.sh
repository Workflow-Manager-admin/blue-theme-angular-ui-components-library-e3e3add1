#!/bin/bash
cd /home/kavia/workspace/code-generation/blue-theme-angular-ui-components-library-e3e3add1/material_ui_library_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

