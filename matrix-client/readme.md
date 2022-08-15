# Organ: Federated Event Organising on Matrix

This document collates research and outlines a proposal for a [federated](decentralised-software.md) app, **Organ.**

The purpose of the app is to enable groups to organise events, make announcements, and publish media and documents in an open, privacy-oriented way. The primary target audience is political organisers, activists, nonprofits, unions, artists and community groups — particularly those that prefer a horizontal or grassroots organizing structure.

This document is the outcome of a process of research and learning undertaken by the author in collaboration with a small group of grassroots activists called Radical Directory. You can learn more about who we are [here](about-us.md)

The process has broadly been about how technology can be used to promote political organising for social justice, and narrowly about ways to achieve these two goals:

- Enabling easy event coordination and information sharing (publishing) while protecting privacy and autonomy of users
- Using community-led design and open networks to improve discovery, access and onboarding for new members to join groups

These goals are not specific to grassroots activism or political organising. In fact, the need for tools of coordination and discovery are currently both largely met by for-profit social networks such as Facebook (without the privacy, autonomy, etc.). Noting as well that information sharing and event organising have a natural overlap with many groups' access and onboarding processes, my research has focused on understanding the requirements and potential technical solutions for a new app that would better support communities (of any kind) to achieve these goals. The proposal below describes one such technical solution in the hope of receiving critical feedback and/or support from individuals and organisations to implement it. 

To make reading this document easy, I've put contextualising background information in these documents:

- [What are the requirements for the proposed app?](pages/requirements.md)
- [Introduction to Decentralised Software](pages/decentralised-software.md)
- [Overview of Similar Projects](pages/similar-projects.md)

## Proposal

Organ would use the **Matrix protocol** to synchronise information about events and organisations between servers. Matrix is an “eventually consistent global JSON database with an HTTP API and pubsub semantics”, primarily used for federated instant messaging applications. The protocol exists as an openly published specification defined and promoted by the not-for-profit Matrix.org Foundation, which also maintains open source server software implementing the protocol.

The Matrix specification allows for arbitrary extensions, meaning that existing Matrix servers can pass messages with custom fields that are only understood by certain clients. This means that effectively the server can be treated as a kind of arbitrary event transport service.

The proposed app, Organ, would fundamentally be a Matrix client. By conforming and making valid extensions to the Matrix protocol, the app gets its backend (including federation) 'for free' by making use of existing Matrix server
software. This means we can build a federated app relatively cheaply by focusing only on the front end - creating a new Matrix client for web, iOS and Android.

The Matrix ecosystem also includes SDKs for building clients, notably including
implementations of the Olm and Megolm double-ratchet algorithms for end-to-end encryption (E2EE) — the same as is used by Signal. These libraries, which have undergone professional security audits, can be brought into a new client to provide E2EE. An argument for why E2EE would be useful in such an app can be found [here](pages/requirements.md), and I've written aboud other benefits of building on Matrix [here](pages/protocol.md).  

- [Protocol: ‘Why Matrix?’](pages/protocol.md)
- [Spec Extension](pages/spec-extension.md)
- [Development Plan](pages/development-plan.md)
- [Homeservers Plan](pages/homeservers.md)
