# Test script for zkGraph

# Update `zkgraph.config.ts` with your own parameters first!
# Then run `sh test.sh`

npm run compile &&
npm run exec -- x &&
npm run prove -- --inputgen 5052085 0000000000000000000000007b1ef80aec6b92fe39d842accf562b30833d3250 &&
npm run prove -- --test 5052085 0000000000000000000000007b1ef80aec6b92fe39d842accf562b30833d3250