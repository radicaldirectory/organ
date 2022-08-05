# Organ: Federated Event Organising on Matrix

This document collates research and outlines a proposal for a [federated](decentralised-software.md) app, **Organ.** The purpose of the app is to enable groups to organise events, make announcements
and publish documents in an open, privacy-oriented way. The primary target audience is political organisers,
activists, nonprofits, unions, artists and community groups — particularly those
that prefer a horizontal or grassroots organizing structure.

To make reading this document easy, I've put contextualising background information in these documents:

- [What is this document?](authors-note.md)
- [What are the requirements for the proposed app?](requirements.md)
- [Introduction to Decentralised Software](decentralised-software.md)
- [Overview of Similar Projects](similar-projects.md)

## Proposal

Organ would use the **Matrix protocol** to synchronise information about events and
organisations between servers. Matrix is an “eventually consistent global JSON
database with an HTTP API and pubsub semantics”, primarily used for federated
instant messaging applications. The protocol exists as an openly published
specification defined and promoted by the not-for-profit Matrix.org Foundation,
which also maintains open source server software implementing the protocol.

The Matrix specification allows for arbitrary extensions, meaning that existing Matrix
servers can pass messages with custom fields that are only understood by certain
clients. This means that effectively the server can be treated as a kind of
arbitrary event transport service.

The proposed app, Organ, would fundamentally be a Matrix client. By conforming
and making valid extensions to the Matrix protocol, the app gets its backend
(including federation) 'for free' by making use of existing Matrix server
software. This means we can build a federated app relatively cheaply by focusing only on the
front end - creating a new Matrix client for web, iOS and Android.

The Matrix ecosystem also includes SDKs for building clients, notably including
implementations of the Olm and Megolm double-ratchet algorithms for end-to-end
encryption (E2EE) — the same as is used by Signal. These libraries, which have
undergone professional security audits, can be brought into a new client to provide E2EE. An argument for why E2EE would be useful in such an app can be found [here](requirements.md), and I've written aboud other benefits of building on Matrix [here](protocol.md).  

- [Protocol: ‘Why Matrix?’](protocol.md)
- [Spec Extension](spec-extension.md)
- [Development Plan](development-plan.md)
- [Homeservers Plan](homeservers.md)
