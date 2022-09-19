# Requirements

## Goals for an improved architecture

This section will name some features that I believe are important to effectively
solve the problems that grassroots activists face when communicating about
organising. I think these features need to be accounted for in the system
design, with a clear path towards implementing them.

Firstly, it should be **easily possible** for groups **to create their own
version** of Radical Directory, and that these multiple versions - or servers -
can all **share data with each other**. Your list of trusted friends should be
able to include people no matter which server they joined. If there are multiple
servers for different places around the world, one activist group or event can
still have members in all of these different places and share the data between
the servers.

This concept is called **federation**, or a **federated architecture**. It’s
made possible by defining a way that servers can communicate with each other,
and there are multiple examples of this being used to build fully functional
apps with no point of central control. Abdicating central control does mean that
it’s possible for fascists, etc. to autonomously run the software and try to
interact with the broader network. Server admins will need the capacity to block
users and potentially entire servers from participating in anything on their
server, and of course individual users should be able to block other users and
if needed, report them to the server admins.

Ultimately, involving servers (and server admins) in the creation of user
accounts, groups and events should become optional rather than required. This
will be possible as the technology for full peer-to-peer (P2P) communication is
further developed and refined, and it will enable communities to share
information with each other through mesh networks without access to the wider
internet (a tactic that has had some use in protest movements where internet has
been State-censored or shut down).
[https://www.theguardian.com/world/2014/sep/29/firechat-messaging-app-powering-hong-kong-protests](https://www.theguardian.com/world/2014/sep/29/firechat-messaging-app-powering-hong-kong-protests)

Secondly**, privacy** (via advanced permissions systems) **and security** (via
E2E encryption) should be available for groups and events. Although one of the
core goals of Radical Directory is improving _discoverability_ of political
projects for newcomers, this should be approached in a consentful way by
allowing activists to opt out of publicly sharing information about groups or
events. This will enable people to better mitigate the risks of doxxing,
harassment, infiltration or criminalisation.

Privacy requires that activists can identify trusted people and give them
permission to access the content. This means that it will be necessary to create
social networks where users can identify their friends (perhaps via linking with
Instagram, Facebook, Mastodon or checking a phone address book). Another way to
identify trusted people is by granting permissions to members of activist groups
or organisations. This enables people to share vulnerable information beyond
their immediate social network by trusting that these organisations follow some
kind of vouching process before granting membership.

_N.B. Vouching processes, and the way that communities collectively develop (or
lose) trust in individuals, are complicated and difficult to map onto software
structures. This topic requires deeper collective research and experimentation.
Hopefully this project can contribute towards building more effective,
consistent and straightforward security practices where required._

Thirdly, users should be able to get **customisable push notifications** as
events are posted and updated in real time. In practical terms this means making
a mobile app that can be downloaded the iOS App Store and Google Play, as well
as F-Droid. Alternatively, users should still be able to sign up for email
updates from the web version. Apps can be fairly involved to make, and need to
be approved by the app vendors before they are added to the store. To make it
easier for others to start new servers that federate with Radical Directory, it
would make the most sense **to create one generic app that all servers can
use**. When first opening the app, it might ask you to select one of a list of
servers before you log in, or enter a custom one. Alternative apps would still
be possible. On the web side, it can be a little easier to create a custom
version, and each server would provide their own web app from their custom
domain.

User Stories:

- I can create an account
- I can log in
- I can create a group
- I can join a group
- I can search for other users
- I can search for groups
- I can invite another user to my group
- I can subscribe to a group
- I can read posts by groups
- I can make a post on behalf of my group
- I can create an event
- I can subscribe to an event
- I can read updates about an event
- I can turn on notifications for an event
- I can turn on notifications for a group
- I can read information about a group
- I can read information about an event
- I can read information about a user
- I can choose what information others can read about me
- I can choose what information others can read about my group
- I can choose whether people can see my group
- I can see a feed of updates about all the groups and events I'm subscribed to
