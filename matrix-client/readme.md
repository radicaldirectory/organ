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

[Author’s Note](authors-note.md)

[Radical Directory](radical-directory.md)

[Requirements](requirements.md)

[Introduction to Decentralised Software](decentralised-software.md)

[Overview of Similar Projects](similar-projects.md)

Proposal

[Protocol: ‘Why Matrix?’](protocol.md)

[Spec Extension](spec-extension.md)

[Development Plan](development-plan.md)

[Homeservers Plan](homeservers.md)
