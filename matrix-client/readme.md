# RFC: Federated Architecture Proposal

***TL;DR: I think we should make a decentralised app for organisations to post announcements and events on, and optionally encrypt these so only selected groups of people can access them. To enable this, the app should be an open source client to the Matrix protocol (with some minimal extensions to the specification).*** 

***The organisation Radical Directory should administrate, moderate and promote a single Matrix server for grassroots activists in Naarm (so called Melbourne, Australia) who want to use the new app to share information and events.*** 

***However, the app should have utility for a far wider range of organisations. I invite interested and values-aligned organisations and individuals to connect with me, give feedback on the proposal, or otherwise support the development of such an app and a corresponding network of users.*** 

# Introduction

Radical Directory’s goal is to create a better way for activists to share information about their organisations, campaigns and events. 

As I’ve worked with Radical Directory over the last two years, my main focus has been educating myself and researching the current state of web technology, as well as identifying new technologies and approaches that are likely to become increasingly relevant in the future. The primary outcome of this work has been to propose and experiment with a series of architectural designs for a system where activists can share this information with each other that is better than existing solutions. 

Why Radical Directory?

What?

1. Distribute info about events and organisations to broad networks of people
    1. Enable user discovery of new groups and events / easier, more targeted recruitment and promotion for groups
    2. Reliable, accessible notifications and update feeds
    3. A robust mechanism enabling groups to make requests for tangible support 
2. Facilitate building networks of trust and solidarity by promoting transparency, consent, accountability and understanding of context
    1. Enabling people to make private and secure groups and events through End to End Encryption
    2. Developing mechanisms for group decision making and vouching for each other
    3. Researching ways to protect a plurality of perspectives and robust critique, while mitigating abuse and harassment through collective structures
    4. Promoting sharing of insights, experiences and analysis, and cross-citation to better situate political thought within lineages of struggle

How?

1. Use new, open source software and frameworks to create a fast, scalable web app
2. Mobilise network effects within Naarm activist community via grassroots organising and workshops
3. Develop organisational design expertise and prioritise ‘community-led’ design to iteratively produce good and continually improving UX
    - There are a few small, independent platforms that are used for sharing information about social justice organising, such as Squat Radar and Ecoshout. Most people have migrated to just using Facebook. One explanation may be that users of the internet in general have raised their standards and expectations in terms of UX - it has been shown that users are more likely to click away if they can’t find what they are looking for, if a page takes too long to load, etc. Even if an alternative to Facebook is ‘rationally better’ in terms of politics, etc, the developers should still aim to produce high quality design that keeps getting better.

Why?

1. Not Facebook
    - Facebook (and its parent company Meta) has been widely criticised for abusing and failing to protect users’ data, for creating addictive mechanics, and for pushing a right-wing ideological position through its content moderation policy. It is a major force in advancing what Shoshana Zuboff calls *Surveillance Capitalism.*
    - Nonetheless, Facebook is still the dominant platform for distributing information about events, even among left wing activists in Naarm. Events are critical in the maintenance and growth of community and political movements. In order to access community, activists therefore must have a Facebook account, must be ‘friends’ with other activists on Facebook, must have the app installed on their phone and have notifications turned on, or regularly open it to check.  For our social movements to succeed in the long term, we need a significant intervention in this state of affairs in which we literally cannot access most of our community without the mediation of this parasitic corporation.
    - As a platform, Radical Directory would be sustained by a not-for-profit economic and legal structure, as well as an organisational structure oriented around democracy and accountability to ‘the community’. Presupposing that we succeed in creating this structure, we could then promise to act in line with our values and an ethical and political framework created with ‘the community’.
2. 

## ‘Platform’ approach to organising

Since most online resources about web technology are oriented towards conventional solutions for commercial products, my proposals so far have also been conventional from a technical standpoint. The point of differentiation from existing services like Facebook would be in how we handle governance - not-for-profit, values-driven and focused on being accountable to the community. The most recently proposed design, could be summarised like this: 

*We will create a web app where activists can create user accounts and post information about their organisations and corresponding events. The data will then be stored in a central database and made accessible to the public on the web. Users can sign up to get email notifications about groups or events. The majority of our work will be to create an accessible user interface for organisers to create or edit their pages and events, and manage permissions. As use of the app grows, we can optimise and scale our resources.*

I have taken some steps towards implementing this approach. I believed this was the only reasonable solution to the problem, but some major problems were already apparent:

1. Like Facebook and other corporate media services, **moderation and governance of the platform must be centrally controlled to some degree**
    - A single point of failure from a political and managerial point of view. A change in leadership or collective makeup could take the platform in a bad direction and lose social support
    - High vulnerability to attack or influence by bad actors
    - Difficult to both grow the network of users and maintain a strong political stance without creating hierachy. Inclusion/exclusion from the platform is inevitably arbitrary
    - Difficult to create consensual, retractable alliances with existing political networks
    - Low capacity for culturally distinct communities to govern their use of the platform in a way that is sovereign or culturally aligned
    - Users do not have the freedom to choose between different user interfaces or moderation approaches in order to make use of the network
2. **Activists do not want all of their events and operations to be public**
    - Often, activism and community organising is only appropriate to be shared within a given context or community, e.g. a fundraiser to help an individual with a medical problem might reveal too much personal information to be shared publicly
    - Some activists use tactics that lead them to expect criminalisation and/or an anticipatory police response - typically they use Signal or some other **E2E encrypted** messaging app to organise these, but this means compromising on ease of use compared to Facebook etc
    - Activist groups often share requests for support or resources (e.g. on an Instagram story), and Radical Directory hopes to build functionality to make this easier. But often, requests are intended for a specific or trusted group of people

The desire to solve these problems pushed me to continue researching alternative solutions to building a web system for sharing structured social information, and this document outlines a vision for a better platform, my research findings and a proposed path for future technical development.

## Goals for an improved architecture

This section will name some features that I believe are important to effectively solve the problems that grassroots activists face when communicating about organising. I think these features need to be accounted for in the system design, with a clear path towards implementing them. 

Firstly, it should be **easily possible** for groups **to create their own version** of Radical Directory, and that these multiple versions - or servers - can all **share data with each other**. Your list of trusted friends should be able to include people no matter which server they joined. If there are multiple servers for different places around the world, one activist group or event can still have members in all of these different places and share the data between the servers. 

This concept is called **federation**, or a **federated architecture**. It’s made possible by defining a way that servers can communicate with each other, and there are multiple examples of this being used to build fully functional apps with no point of central control. Abdicating central control does mean that it’s possible for fascists, etc. to autonomously run the software and try to interact with the broader network. Server admins will need the capacity to block users and potentially entire servers from participating in anything on their server, and of course individual users should be able to block other users and if needed, report them to the server admins. 

Ultimately, involving servers (and server admins) in the creation of user accounts, groups and events should become optional rather than required. This will be possible as the technology for full peer-to-peer (P2P) communication is further developed and refined, and it will enable communities to share information with each other through mesh networks without access to the wider internet (a tactic that has had some use in protest movements where internet has been State-censored or shut down). [https://www.theguardian.com/world/2014/sep/29/firechat-messaging-app-powering-hong-kong-protests](https://www.theguardian.com/world/2014/sep/29/firechat-messaging-app-powering-hong-kong-protests)

Secondly**, privacy** (via advanced permissions systems) **and security** (via E2E encryption) should be available for groups and events. Although one of the core goals of Radical Directory is improving *discoverability* of political projects for newcomers, this should be approached in a consentful way by allowing activists to opt out of publicly sharing information about groups or events. This will enable people to better mitigate the risks of doxxing, harassment, infiltration or criminalisation.

Privacy requires that activists can identify trusted people and give them permission to access the content. This means that it will be necessary to create social networks where users can identify their friends (perhaps via linking with Instagram, Facebook, Mastodon or checking a phone address book). Another way to identify trusted people is by granting permissions to members of activist groups or organisations. This enables people to share vulnerable information beyond their immediate social network by trusting that these organisations follow some kind of vouching process before granting membership. 

*N.B. Vouching processes, and the way that communities collectively develop (or lose) trust in individuals, are complicated and difficult to map onto software structures. This topic requires deeper collective research and experimentation. Hopefully this project can contribute towards building more effective, consistent and straightforward security practices where required.*

Thirdly, users should be able to get **customisable push notifications** as events are posted and updated in real time. In practical terms this means making a mobile app that can be downloaded the iOS App Store and Google Play, as well as F-Droid. Alternatively, users should still be able to sign up for email updates from the web version. Apps can be fairly involved to make, and need to be approved by the app vendors before they are added to the store. To make it easier for others to start new servers that federate with Radical Directory, it would make the most sense **to create one generic app that all servers can use**. When first opening the app, it might ask you to select one of a list of servers before you log in, or enter a custom one. Alternative apps would still be possible. On the web side, it can be a little easier to create a custom version, and each server would provide their own web app from their custom domain. 

# Proposal: Build Radical Directory on Matrix

Matrix is a protocol for decentralised, E2E encrypted, real-time communication between devices. It was introduced in 2014 and has since spawned a fairly large ecosystem of software. The primary use of the Matrix protocol is for Instant Messaging: when users join via a client like Element, they get a messaging experience similar to Signal, WhatsApp or Discord - just encrypted and decentralised. It is also used for signalling VoIP voice or video calls, and has applications for sharing data between smart ‘Internet of Things (IoT) devices, but anything is possible that can make good use of the core features of the protocol.

What makes Matrix special, particularly as a messaging protocol, is that it is relatively easy and straightforward to create **‘bridges’ to other protocols**. These are small servers that run alongside the main server to translate data from Matrix’s formatting to those specified by other external applications. The main use for this is to enable Matrix users to send and receive messages from other messaging apps, like Signal, WhatsApp, Facebook Messenger, Instagram, Slack or Discord. Another important feature of the Matrix protocol is that it is **extensible**, meaning that developers can add custom semantic data fields to be exchanged on the protocol. 

The Matrix specification, like ActivityPub, is defined for a federated architecture where users use clients (apps, websites, etc.) to connect with home-servers. These home-servers store their user profile data and connect with other servers to create *rooms*. An example of a room is a group chat with five users in it. Thanks to federation, users can be registered on different home-servers and all take part in the group chat room. Users post message events to the room, and the data for these messages is stored across all of the users’ corresponding home-servers. Each server is responsible for forwarding its users’ messages to these other relevant servers, accepting updates from other servers, and they all use an algorithm to arrive at a consistent state for the correct sequence of events in that room. Unlike a blockchain, it’s not a consensus algorithm - state conflicts are handled in a less expensive and less destructive way.

I propose that the Matrix protocol, and one of the provided server implementations, can be used as the backend for Radical Directory. The concept of *rooms* is flexible, allowing clients to send custom events - not just conversational messages. 

We can use rooms to represent activist groups and organisations. Groups should have the following features:

- Group Name
- A list of followers - people who want notifications, or updates from the organisation
- A sublist of members of the organisation
    - Optional: varying levels of permissions within the group membership (i.e. hierarchy within group)
- A stream of announcements - group members can make a post, which followers receive
- Ability to create events and subgroups ‘owned’ by the group - i.e. where group members inherit permissions over the event
- Followers may reply to announcements, or post to the group - these may be questions or comments about the group in general
- A (potentially large) document about the group - more on this below

Rooms can also be used to represent events. Events should have these features:

- Event Name
- Location
- Link (to booking tickets, or to join video call/stream)
- Document about the event
- List of followers (people who want notifications about the event)
- Sublist of attendees (people who are planning on attending or have booked)
- Sublist of hosts (people with permissions to edit details about the event)
- Ability for followers etc to post in the event, ask questions
    - Stream of announcements about the event (posts by hosts)

Ultimately, it would be ideal to have collaborative rich text document editing

Groups, like rooms, have members. Groups need to make announcements, which could be achieved by posting a message in a room. 

The app (whether on the web or a native app) may facilitate onboarding of new users - checking address book for known contacts? - and discovery of (public) groups. How is discovery done?

Groups should ideally have some kind of metadata - tags etc - so users can select their interests 

# Decentralisation and the web

Peer-to-peer (P2P) technology first caught public attention with the BitTorrent file sharing protocol released in 2001. In 2022, an overwhelming amount of new open protocols exist for distributed or decentralised data sharing. This section gives an overview of my research into them as context for my proposal, but it is not necessary to read it. 

Over the last two decades, *decentralised* (and a subcategory: *distributed)* data protocols have become the subject of sustained academic, industry and activist research. The image below broadly illustrates the difference between the different types of network.

![1*nnpzTe1hx74WKICL3Gj34A.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f64f892-9e63-49ae-a144-894a750709d9/1nnpzTe1hx74WKICL3Gj34A.jpeg)

To clarify some terms, P2P is a type of distributed system where data is transferred directly between peers - that is, people and their devices. Another term that comes up a lot is *federated*. This is a system that looks a lot like the middle image in the diagram above. Peers can all connect to each other without the need for a central point, but there are semi-central points. These semi-central points are computers called *servers*, and data has to flow through them in a federated system.

A protocol is essentially a specification for how data should be formatted and what a program needs to do to access it. For P2P and decentralised software, a protocol is crucial - it’s the way that devices can know how to share data with each other and make guarantees about that data. 

Protocols are all designed with a specific set of features - e.g. some put E2E encryption at the core, while others are more concerned with making the protocol simple and easy to use. The BitTorrent protocol, for example, uses a cryptographic hash to guarantee that the file you download is the one you agreed to download. It can’t stop you from choosing a torrent that links to a virus, but it prevents people from sending you their virus through an otherwise good torrent. 

BitTorrent is still dominant in file sharing but ascendant technologies include IPFS and Hyperdrive. The latter builds on Hypercore (fka Dat), a more general encrypted peer-to-peer distributed data sharing protocol. 

An enormous amount of research has gone into blockchain technology for creating decentralised ledgers and consensus algorithms, enabling the rise of cryptocurrencies like Bitcoin and Ether, however these are computationally very expensive for general purposes in which such high degrees of validation are not required.

There are two notable protocols specifically designed for social media. The first is called Secure Scuttlebutt, which is designed to be P2P (distributed), encrypted, and to work well in situations where users are not connected to the main internet. Since its initial release in 2014, it’s been championed by a small community of hackers as a path out of corporate-ruled centralised social media, and an ecosystem of software implementing the protocol has slowly been in development. 

Another important protocol is called ActivityPub, which is designed for federated social media. The successor to previous social media protocols like OStatus and pump.io, the standard was developed and officially released by the World Wide Web Consortium, giving it institutional legitimacy and bureaucratic protection. While data is protected using authentication, it does not include support for E2E encryption, meaning that users must trust the operators of servers not to access or abuse their data. Nonetheless, use of the protocol has grown significantly and there are now several fully fledged software projects that implement it and share data with each each other, together forming what is sometimes called *the fediverse*. Not all of these are for social media: the video sharing app PeerTube, and the cloud storage and office suite NextCloud both implement the protocol. For social networking, Mastodon has become somewhat well known as a *federated* alternative to sites like Facebook and Twitter, and some others include Pleroma and Diaspora. 

Mobilizon —-

Dat

Freenet

Locutus 

### A side note

To be clear, decentralised technologies are not politically better or worse than centralised ones. Many large corporations are interested in decentralised or distributed computing systems because they can work more efficiently for geographically distributed users. The architecture of the network does not indicate anything about how that network is governed or controlled from a legal or political point of view. Likewise, blockchain technologies like cryptocurrencies are often sold as being somehow politically preferable than centralised systems like Visa, Paypal or traditional banks, due to the fact that they are technologically decentralised. This is can be misleading, because the distribution of major cryptocurrencies (and indirectly, governance and political control over how they operate in the world) is even more centralised than the mainstream economy, and mining resources have been increasingly monopolised.

Rather than focusing on abstract ideas like the network topology, it’s more interesting to consider what freedoms for users are afforded by a technology. Free and Open Source Software can always be copied and changed by programmers, who can publish their own version of it. It’s even better if the code is well documented. But in many situations, having access to the code by itself does not meaningfully give users enough freedom. If Facebook made all of their code open source, but still restricted their network connection to servers controlled by Facebook, this would not meaningfully impact their monopoly over social networking around the world. People could create their own toy versions of Facebook that look and feel the same, except for the fact that they are empty of users. This is a situation in which *the network is the resource that needs to be made free.*

Features/Modules

Calendar

- Location info - (two-way?) link with OpenStreetMap metadata
- Reminders
- iCal/gCal integrations

Group Access Control

- Workflows - Delegate systems/consensus rules?
- Vouching systems
- Semi-Automated Trust Levels (Discourse-style)
- Subscribable & Forkable Blocklists etc

Discovery

- how to find friends? Phone book scan?
- Tag selection during onboarding
- Related events/groups/pages

Feed

- Subscribe to events, groups, tags, locations(?). Feed items are rich text posts, plaintext posts(?), new events posted within groups, tags or events
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
- image face detection - users reminded to check for consent before posting images of people, or automatic face blurring?
- Image porn/gore detection

Push Notifications

- Just build web app first, but create option to get notifications via Element
- Later, native apps

Identity

- handled by Matrix homeserver - any Matrix user can authenticate
- In future P2P matrix, user identity will be linked to their devices rather than an external server

Requests

- people and groups can make and answer requests for support

# Phases

1. Minimal
    - Define custom event types and room types (define standard schema for groups and events)
    - Plain text & single image only
    - Users can create accounts (invite only) and log in
    - (Specially invited) users can create/update groups
    - People in groups can invite members to join
    - Only groups, not individual users, can create events (with form)
    - users can subscribe to groups and events and view a list of updates
    - Group members can post in groups and events (no replies)
    - All users can invite other people to join
    - No encryption
    
2. Simple Notifications
    - Users can download a Matrix client such as Element to receive motivations
    - A bot can be made to streamline this. Maybe a single room for all Directory notifications, with a bot presenting with different IDs to represent different groups and events. Replies can be disallowed ?
    - (determine whether this strategy requires intermediary unencryption)
    
3. Group admin controls
    - group admins can add & remove members to/from group, promote non-admins to admins
    - Admins can delete events
    - Users can subscribe to other users?
    
4. Encryption/privacy
    - E2EE for everything
    - Group admins can set group/event to private or public
    - group members can add/remove/block subscribers from private groups/events
    
5. Rich text
    - all documents are converted to single-column rich text
    - Images are optimised and alt text is mandatory
    - Replies added (plain text + one image only) for group and event posts
    - You can visit peoples user profile
    - Requests are a type of post. Replies are not DMs, just normal replies
    - Documents are versioned when ‘published/updated’ (old versions are read-only) and noncollaborative, editing is locked in edit sessions to prevent data loss
    - Posts/documents in groups and events can be private (to group members only) or public (to everyone, or to subscribers only for private ones)
    
6. Native apps
    - iOS and android without admin controls or group/event creation/updates. Just for getting updates and subscribing to events/groups
    
7. discovery
    - Onboarding process for new users - tag selection, etc
    - Feed page includes suggested groups, events and tags based on who invited them, tags selected, groups and events users are subscribed to
    
8. Basic direct messaging 
    - plain text + single images only
    - No group chats, only one on one
    - UI includes conversation list
    
9. Collaborative editing
    - document editing sessions track presence, cursor, propagate state and resolve conflicts automatically (CRDT)
    - Sessions have user limit of 5 after which it is locked/read-only?
    
10. federation
    - mk
    
11. Integrations
    - iCal/gCal integration with fine grained control (Public events only)
    - Loomio integration?
