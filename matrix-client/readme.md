# Organ: Federated Event Organising on Matrix

This document collates research and outlines a proposal for a federated app,
provisionally named **Organ,** for groups to organise events, make announcements
and publish documents. The primary target audience is political organisers,
activists, nonprofits, unions, artists and community groups — particularly those
that prefer a horizontal or grassroots organizing structure.

In its use case and project goals, Organ has significant overlap with an
existing project called Mobilizon. However there are a few critical differences
between them which explain why a seperate project is proposed. Mobilizon
implements the ActivityPub protocol to federate between instances. Organ would
instead use the Matrix protocol to synchronise information about events and
organisations between servers. Matrix is an “eventually consistent global JSON
database with an HTTP API and pubsub semantics”, primarily used for federated
instant messaging applications. The protocol exists as an openly published
specification defined and promoted by the not-for-profit Matrix.org Foundation,
which also maintains open source server software implementing the protocol.

As the Matrix specification allows for arbitrary extensions, existing Matrix
servers can pass messages with custom fields that are only understood by certain
clients. This means that effectively the server can be treated as a kind of
arbitrary event transport service, with app development simply focusing on the
front end - creating a new Matrix client for web, iOS and Android. This should
drastically reduce the cost of development compared to Mobilizon. Organ would
also make use of existing libraries and toolkits which implement end-to-end
encryption (E2EE) among other features.

Another advantage of building on the Matrix ecosystem is that the app can
benefit from the continued development of the P2P Matrix project, which bundles
a lightweight homeserver into the client and introduces more efficient routing,
among other required features. When that project is ready for widespread use, it
will enable a smooth transition to a peer-to-peer network, with the
understanding that this should improve long-term network resilience,
sustainability and security.

The intention of this project is not to ‘compete’ with Mobilizon but to
respectfully take a different approach and expand the fediverse for everyone.
Naturally, a high priority is integration and interoperability including with
ActivityPub and Mobilizon. If Organ is successfully implemented, the custom spec
extension should be put to Matrix as formal MSC Proposal(s) so that other
clients can implement the novel features.

Background

[Author’s Note](https://www.notion.so/Author-s-Note-7c3784c45eb44f4f94277b88f51b6a95)

[Radical Directory](https://www.notion.so/Radical-Directory-3cb75646b8d745c7a93a071d9eed9499)

[Requirements](https://www.notion.so/Requirements-0466ce26e00745ea8fc8e7312ee018b4)

[Introduction to Decentralised Software](https://www.notion.so/Introduction-to-Decentralised-Software-67f425bf8d5c4675afc6f681bf07926b)

[Overview of Similar Projects](https://www.notion.so/Overview-of-Similar-Projects-a760ddf0b8e74d6485506d91e6c76188)

Proposal

[Protocol: ‘Why Matrix?’](https://www.notion.so/Protocol-Why-Matrix-3df57b1c16104378bca1e309a4075fef)

[Spec Extension](https://www.notion.so/Spec-Extension-392fa265aeda477c9f91516a3a73fbf1)

[Development Plan](https://www.notion.so/Development-Plan-197e91a564cc428f8d8d7bdd78e173fa)

[Flagship Ops Plan](https://www.notion.so/Flagship-Ops-Plan-a1720104b70249089b27ae995e27346e)

As the Matrix project is oriented towards real-time communication,

A side effect of the project would be onboarding new users to Matrix, enabling
users to create accounts which can also be used with Element for chat.

#

**_TL;DR: I think we should make a decentralised app for organisations to post
announcements and events on, and optionally encrypt these so only selected
groups of people can access them. To enable this, the app should be an open
source client to the Matrix protocol (with some minimal extensions to the
specification)._**

**_The organisation Radical Directory should administrate, moderate and promote
a single Matrix server for grassroots activists in Naarm (so called Melbourne,
Australia) who want to use the new app to share information and events._**

**_However, the app should have utility for a far wider range of organisations.
I invite interested and values-aligned organisations and individuals to connect
with me, give feedback on the proposal, or otherwise support the development of
such an app and a corresponding network of users._**
