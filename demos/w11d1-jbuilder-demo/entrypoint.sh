#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
# If Rails sees another server.pid it will think another Rails server is already
# runnning and will terminate.
rm -f tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"