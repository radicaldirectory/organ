# History of this project

Strategic & Political Goals

# Introduction

Radical Directory’s goal is to create a better way for activists to share
information about their organisations, campaigns and events.

As I’ve worked with Radical Directory over the last two years, my main focus has
been educating myself and researching the current state of web technology, as
well as identifying new technologies and approaches that are likely to become
increasingly relevant in the future. The primary outcome of this work has been
to propose and experiment with a series of architectural designs for a system
where activists can share this information with each other that is better than
existing solutions.

Why Radical Directory?

What?

1. Distribute info about events and organisations to broad networks of people
   1. Enable user discovery of new groups and events / easier, more targeted
      recruitment and promotion for groups
   2. Reliable, accessible notifications and update feeds
   3. A robust mechanism enabling groups to make requests for tangible support
2. Facilitate building networks of trust and solidarity by promoting
   transparency, consent, accountability and understanding of context
   1. Enabling people to make private and secure groups and events through End
      to End Encryption
   2. Developing mechanisms for group decision making and vouching for each
      other
   3. Researching ways to protect a plurality of perspectives and robust
      critique, while mitigating abuse and harassment through collective
      structures
   4. Promoting sharing of insights, experiences and analysis, and
      cross-citation to better situate political thought within lineages of
      struggle

How?

1. Use new, open source software and frameworks to create a fast, scalable web
   app
2. Mobilise network effects within Naarm activist community via grassroots
   organising and workshops
3. Develop organisational design expertise and prioritise ‘community-led’ design
   to iteratively produce good and continually improving UX
   - There are a few small, independent platforms that are used for sharing
     information about social justice organising, such as Squat Radar and
     Ecoshout. Most people have migrated to just using Facebook. One explanation
     may be that users of the internet in general have raised their standards
     and expectations in terms of UX - it has been shown that users are more
     likely to click away if they can’t find what they are looking for, if a
     page takes too long to load, etc. Even if an alternative to Facebook is
     ‘rationally better’ in terms of politics, etc, the developers should still
     aim to produce high quality design that keeps getting better.

Why?

1. Not Facebook
   - Facebook (and its parent company Meta) has been widely criticised for
     abusing and failing to protect users’ data, for creating addictive
     mechanics, and for pushing a right-wing ideological position through its
     content moderation policy. It is a major force in advancing what Shoshana
     Zuboff calls _Surveillance Capitalism._
   - Nonetheless, Facebook is still the dominant platform for distributing
     information about events, even among left wing activists in Naarm. Events
     are critical in the maintenance and growth of community and political
     movements. In order to access community, activists therefore must have a
     Facebook account, must be ‘friends’ with other activists on Facebook, must
     have the app installed on their phone and have notifications turned on, or
     regularly open it to check. For our social movements to succeed in the long
     term, we need a significant intervention in this state of affairs in which
     we literally cannot access most of our community without the mediation of
     this parasitic corporation.
   - As a platform, Radical Directory would be sustained by a not-for-profit
     economic and legal structure, as well as an organisational structure
     oriented around democracy and accountability to ‘the community’.
     Presupposing that we succeed in creating this structure, we could then
     promise to act in line with our values and an ethical and political
     framework created with ‘the community’.

‘Platform’ approach to organising

Since most online resources about web technology are oriented towards
conventional solutions for commercial products, my proposals so far have also
been conventional from a technical standpoint. The point of differentiation from
existing services like Facebook would be in how we handle governance -
not-for-profit, values-driven and focused on being accountable to the community.
The most recently proposed design, could be summarised like this:

_We will create a web app where activists can create user accounts and post
information about their organisations and corresponding events. The data will
then be stored in a central database and made accessible to the public on the
web. Users can sign up to get email notifications about groups or events. The
majority of our work will be to create an accessible user interface for
organisers to create or edit their pages and events, and manage permissions. As
use of the app grows, we can optimise and scale our resources._

I have taken some steps towards implementing this approach. I believed this was
the only reasonable solution to the problem, but some major problems were
already apparent:

1. Like Facebook and other corporate media services, **moderation and governance
   of the platform must be centrally controlled to some degree**
   - A single point of failure from a political and managerial point of view. A
     change in leadership or collective makeup could take the platform in a bad
     direction and lose social support
   - High vulnerability to attack or influence by bad actors
   - Difficult to both grow the network of users and maintain a strong political
     stance without creating hierachy. Inclusion/exclusion from the platform is
     inevitably arbitrary
   - Difficult to create consensual, retractable alliances with existing
     political networks
   - Low capacity for culturally distinct communities to govern their use of the
     platform in a way that is sovereign or culturally aligned
   - Users do not have the freedom to choose between different user interfaces
     or moderation approaches in order to make use of the network
2. **Activists do not want all of their events and operations to be public**
   - Often, activism and community organising is only appropriate to be shared
     within a given context or community, e.g. a fundraiser to help an
     individual with a medical problem might reveal too much personal
     information to be shared publicly
   - Some activists use tactics that lead them to expect criminalisation and/or
     an anticipatory police response - typically they use Signal or some other
     **E2E encrypted** messaging app to organise these, but this means
     compromising on ease of use compared to Facebook etc
   - Activist groups often share requests for support or resources (e.g. on an
     Instagram story), and Radical Directory hopes to build functionality to
     make this easier. But often, requests are intended for a specific or
     trusted group of people

The desire to solve these problems pushed me to continue researching alternative
solutions to building a web system for sharing structured social information,
and this document outlines a vision for a better platform, my research findings
and a proposed path for future technical development.
