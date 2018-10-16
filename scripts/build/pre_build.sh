#!/bin/bash

echo "Running Tests"

yarn test || { echo "React Tests Failed"; exit 1; }
