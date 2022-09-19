# Organ: Federated Event Organising on Matrix

**This document was written on the lands of the Wurundjeri and Boon Wurrung
people of the Kulin Nation. I pay respect to their elders past and present, and
acknowledge that sovereignty was never ceded.**

This document collates research and outlines a proposal for a
[federated](decentralised-software.md) app, **Organ.**

The purpose of the app is to enable groups to organise events, make
announcements, and publish media and documents in an open, privacy-oriented way.
The primary target audience is political organisers, activists, nonprofits,
unions, artists and community groups — particularly those that prefer a
horizontal or grassroots organizing structure.

This document is the outcome of a process of research and learning undertaken by
the author in collaboration with a small group of grassroots activists called
Radical Directory. You can learn more about who we are [here.](about-us.md) This
learning process has broadly been about how technology can be used to promote
political organising for social justice, and narrowly about ways to achieve
these two goals:

- Enabling easy, effective event coordination and information sharing (i.e.
  publishing) while protecting privacy and autonomy of users
- Improve discovery, access and onboarding for new members to join and
  participate in groups

For many groups, information sharing and event organising have a natural overlap
with access and onboarding (e.g. people find out about you through public events
or content you published, or you might run induction or training events when
people join), so an app that combines these functions makes sense.

It should be noted that these goals are not specific to grassroots activism or
political organising. Events and groups are the basic building blocks of all
communities and teams, and privacy and autonomy - or in other words, freedom -
are basic dignities everyone should get, without having to sacrifice
functionality or useability.

The research has therefore focused on understanding the requirements and
potential technical solutions for a new app that would better support
communities of any kind to achieve both of these goals. The proposal below
describes one such technical solution in the hope of receiving critical feedback
and/or support from individuals and organisations to implement it.

## Principles Guiding Design

The open source software development community is rich with critique of existing
software monopolies. Many developers have converged on the goals of promoting
autonomy and privacy in software, and accordingly there are well defined
principles for achieving these technically.

User (and community) autonomy is generally understood to be achieved by:

- Making all software open source, so that it can be replicated and changed
  freely according to need. This may include supporting and encouraging
  developers to make customisations by orienting towards modularity and
  extensibility
- Adopting standardised APIs that enable data sharing outside the scope of
  control of any individual or group (i.e. federation or even better,
  peer-to-peer)
- Maximising interoperability by conforming to existing standards as much as
  possible


Privacy is understood as a set of practices with the goal of mitigating risks
related to unwanted exposure of personal data. Some of the major risks are:

- Data access by malicious individuals for doxxing, abuse or harrassment
  purposes
- Data access by governments targeting individuals for surveillance, control or
  criminalisation
- Data access by corporations for targeted advertising
- Uninformed consent. The user does not understand what they have agreed to
  share

Privacy is understood to mean ensuring that users' data is only accessed by
people (or groups of people) when there is consent from the user. One part of
this is in empowering the user by promoting
[consentful design](https://www.consentfultech.io), with the goal that users
clearly understand when they agree to share their data and the extent to which
that can be revoked. The other part aims to make it technically impossible for
that data to be accessed when consent is not given.

Privacy and security are understood as a broad spectrum of practices enabling
varying levels of secrecy and mitigating various levels of risk. It is a complex
field but there is an enormous amount of publicly accessible literature, open
algorithms and open source code that addresses many privacy concerns. Many
privacy concerns are 'features' of for-profit software, such as storing and
sharing personal data, which are avoided by creating not-for-profit open source
software that does not do such things. Other concerns are about interception of
data, which are more difficult to protect against. Finally, there is the privacy
risk that governments might force organisations to hand over data.

The risks of interception and forced data access are partially mitigated by
offering users end-to-end encryption for all data that is not intended to be
public, among a range of other practices.

Community-led design is a third aspect of the goals that should be expanded
upon. This field of knowledge is a critical intersection between technology
(among other areas) and social justice which is well embodied in
[ten principles published by the Design Justice Network](https://designjustice.org/read-the-principles),
which are reproduced here:

- We use design to sustain, heal, and empower our communities, as well as to
  seek liberation from exploitative and oppressive systems.
- We center the voices of those who are directly impacted by the outcomes of the
  design process.
- We prioritize design’s impact on the community over the intentions of the
  designer.
- We view change as emergent from an accountable, accessible, and collaborative
  process, rather than as a point at the end of a process.
- We see the role of the designer as a facilitator rather than an expert.
- We believe that everyone is an expert based on their own lived experience, and
  that we all have unique and brilliant contributions to bring to a design
  process.
- We share design knowledge and tools with our communities.
- We work towards sustainable, community-led and -controlled outcomes.
- We work towards non-exploitative solutions that reconnect us to the earth and
  to each other.
- Before seeking new design solutions, we look for what is already working at
  the community level. We honor and uplift traditional, indigenous, and local
  knowledge and practices.

These are strong calls to action that should be used to hold this project
accountable.

- [What are the requirements for the proposed app?](pages/requirements.md)
- [Introduction to Decentralised Software](pages/decentralised-software.md)
- [Overview of Similar Projects](pages/similar-projects.md)

## Proposal

Organ would use the **Matrix protocol** to synchronise information about events
and organisations between servers. Matrix is an “eventually consistent global
JSON database with an HTTP API and pubsub semantics”, primarily used for
federated instant messaging applications. The protocol exists as an openly
published specification defined and promoted by the not-for-profit Matrix.org
Foundation, which also maintains open source server software implementing the
protocol.

The Matrix specification allows for arbitrary extensions, meaning that existing
Matrix servers can pass messages with custom fields that are only understood by
certain clients. This means that effectively the server can be treated as a kind
of arbitrary event transport service.

The proposed app, Organ, would fundamentally be a Matrix client. By conforming
and making valid extensions to the Matrix protocol, the app gets its backend
(including federation) 'for free' by making use of existing Matrix server
software. This means we can build a federated app relatively cheaply by focusing
only on the front end - creating a new Matrix client for web, iOS and Android.

The Matrix ecosystem also includes SDKs for building clients, notably including
implementations of the Olm and Megolm double-ratchet algorithms for end-to-end
encryption (E2EE) — the same as is used by Signal. These libraries, which have
undergone professional security audits, can be brought into a new client to
provide E2EE. An argument for why E2EE would be useful in such an app can be
found [here](pages/requirements.md), and I've written aboud other benefits of
building on Matrix [here](pages/protocol.md).

- [Protocol: ‘Why Matrix?’](pages/protocol.md)
- [Spec Extension](pages/spec-extension.md)
- [Development Plan](pages/development-plan.md)
- [Homeservers Plan](pages/homeservers.md)
