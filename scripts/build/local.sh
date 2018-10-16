#!/bin/bash

./scripts/build/install.sh || { exit 1; }
./scripts/build/pre_build.sh || { exit 1; }
./scripts/build/build.sh || { exit 1; }
./scripts/build/post_build.sh || { exit 1; }
