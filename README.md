# EventFlow-FrontEnd
The EventFlow-FrontEnd provides an interface for users of the EventFlow to interact with the EventFlowTicket contract which provides event management and NFT Ticketing services, this makes EventFlow an Event management and NFT Ticketing platform, and as an additional feature provides users a portfolio of their connected wallet address.

Another bonus feature of EventFlow is it provides gas estimations for users, this allows users to know the amount of gas/fee they do spend for a transaction before performing the transaction.

In EventFlow you can:
- Create events as a creator (Event Host).
- Buy event tickets as an attendee of an event.
- Find Event near you.
- Track Top events to attend.
- Own NFT by buying Event Tickets
- As a bonus to users of EventFlow you automatically have profile of your connected wallet address

Checkout the EventFlowTicket contract [here](https://github.com/BlockHashiras/EventFlow/blob/main/src/EventFlow.sol)

## Deeper Dive

When users create event having provided the neccesary data needed (ticket image, event title, event location, event date and time, ticket quantty and event price) the ticket image is stored on an ipfs while other data are stored in the contract storage. these data are retrieved on request.

Eventflow also provides account portfolio services, this gets you balance of tokens and cumulates that, giving you both the individual balance and a cummulated balance, such that you can easily know your accoount balance in one glance. 

Checkout the EventFlowTicket contract README.md [here](https://github.com/BlockHashiras/EventFlow/blob/main/README.md) for more technical explanation of the bits of this contract.
