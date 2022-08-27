# Protocol: ‘Why Matrix?’

# Proposal: Build Radical Directory on Matrix

Matrix is a protocol for decentralised, E2E encrypted, real-time communication
between devices. It was introduced in 2014 and has since spawned a fairly large
ecosystem of software. The primary use of the Matrix protocol is for Instant
Messaging: when users join via a client like Element, they get a messaging
experience similar to Signal, WhatsApp or Discord - just encrypted and
decentralised. It is also used for signalling VoIP voice or video calls, and has
applications for sharing data between smart ‘Internet of Things (IoT) devices,
but anything is possible that can make good use of the core features of the
protocol.

What makes Matrix special, particularly as a messaging protocol, is that it is
relatively easy and straightforward to create **‘bridges’ to other protocols**.
These are small servers that run alongside the main server to translate data
from Matrix’s formatting to those specified by other external applications. The
main use for this is to enable Matrix users to send and receive messages from
other messaging apps, like Signal, WhatsApp, Facebook Messenger, Instagram,
Slack or Discord. Another important feature of the Matrix protocol is that it is
**extensible**, meaning that developers can add custom semantic data fields to
be exchanged on the protocol.

The Matrix specification, like ActivityPub, is defined for a federated
architecture where users use clients (apps, websites, etc.) to connect with
home-servers. These home-servers store their user profile data and connect with
other servers to create _rooms_. An example of a room is a group chat with five
users in it. Thanks to federation, users can be registered on different
home-servers and all take part in the group chat room. Users post message events
to the room, and the data for these messages is stored across all of the users’
corresponding home-servers. Each server is responsible for forwarding its users’
messages to these other relevant servers, accepting updates from other servers,
and they all use an algorithm to arrive at a consistent state for the correct
sequence of events in that room. Unlike a blockchain, it’s not a consensus
algorithm - state conflicts are handled in a less expensive and less destructive
way.




Another advantage of building on the Matrix ecosystem is that the app can
benefit from the continued development of the P2P Matrix project, which bundles
a lightweight homeserver into the client and introduces more efficient routing,
among other required features. When that project is ready for widespread use, it
will enable a smooth transition to a peer-to-peer network, with the
understanding that this should improve long-term network resilience,
sustainability and security.
