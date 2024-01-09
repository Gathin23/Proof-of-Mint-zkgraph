//@ts-ignore
import { require } from "@hyperoracle/zkgraph-lib";
import { Bytes, Block, Event, Address } from "@hyperoracle/zkgraph-lib";

let addr = Bytes.fromHexString("0x4873528341d33ec918c7465f244491acb75bc95f");
let esig_sync = Bytes.fromHexString(
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
);

export function handleBlocks(blocks: Block[]): Bytes {
  // init output state
  let state: Bytes = Bytes.fromHexString('0x');

  // #1 can access all (matched) events of the latest block
  let events: Event[] = blocks[0].events;

  // #2 also can access (matched) events of a given account address (should present in yaml first).
  // a subset of 'events'
  let eventsByAcct: Event[] = blocks[0].account(addr).events;

  // #3 also can access (matched) events of a given account address & a given esig  (should present in yaml first).
  // a subset of 'eventsByAcct'
  let eventsByAcctEsig: Event[] = blocks[0]
    .account(addr)
    .eventsByEsig(esig_sync);

  // require match event count > 0
  require(eventsByAcctEsig.length > 0);

  // this 2 way to access event are equal effects, alway true when there's only 1 event matched in the block (e.g. block# 2279547 on sepolia).
  require(events[0].data == eventsByAcct[0].data &&
    events[0].data == eventsByAcctEsig[0].data);

  for (let i = events.length - 1; i >= 0; i--) {
    if (events[i].address.equals(addr) && events[i].esig.equals(esig_sync) && events[i].topic1.equals(
      Bytes.fromHexString("0x0000000000000000000000000000000000000000"))) {
       {
        state = events[i].topic2;
        break;
      }
    }
  }
  return state;
}
