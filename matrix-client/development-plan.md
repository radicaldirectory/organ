# Development Plan

# **rd implementation**

use matrix rust sdk

next js for web client

swr or react query for data fetching

audit ionic and expo (react webview vs react native) for cross platform dev
stack

lightweight client (lazy load) with sliding sync. later, explore caching options

media storage, transforms, client editor -

most likely use prosemirror model (normalised flat json tree) for extensible
rich text representation - implications of this for interoperability need
research

Feature Modules

Calendar

- Location info - (two-way?) link with OpenStreetMap metadata
- Reminders
- iCal/gCal integrations

Group Access Control

- Workflows - Delegate systems/consensus rules?
- Vouching systems
- Semi-Automated Trust Levels (Discourse-style)
  - see
    [https://github.com/freenet/wiki/wiki/Web-Of-Trust](https://github.com/freenet/wiki/wiki/Web-Of-Trust)
- Subscribable & Forkable Blocklists etc

Discovery

- how to find friends? Phone book scan?
- Tag selection during onboarding
- Related events/groups/pages

Feed

- Subscribe to events, groups, tags, locations(?). Feed items are rich text
  posts, plaintext posts(?), new events posted within groups, tags or events
- Feed may be integrated with discovery to help onboard new users

Document Editing

- Real-time P2P Collaboration (CRDT)
- Workflows - drafts/proposals
- Wiki Versioning
- Forkable
- Citeable - block level reference id, UI for quoting, blame data

Accessibility and Data Tools

- ‘Wiki’ Collaborative Captioning/Transcription & Image Description
- AI integrations for captioning, transcription, image description
- Suggested tags for post authors (keyword extraction)
- image face detection - users reminded to check for consent before posting
  images of people, or automatic face blurring?
- Image porn/gore detection

Push Notifications

- Just build web app first, but create option to get notifications via Element
- Later, native apps

Identity

- handled by Matrix homeserver - any Matrix user can authenticate
- In future P2P matrix, user identity will be linked to their devices rather
  than an external server

Requests

- people and groups can make and answer requests for support

[Release Plan](release-plan.md)
