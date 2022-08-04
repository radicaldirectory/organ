# Introduction to Decentralised Software

# Decentralisation and the web

Peer-to-peer (P2P) technology first caught public attention with the BitTorrent
file sharing protocol released in 2001. In 2022, an overwhelming amount of new
open protocols exist for distributed or decentralised data sharing. This section
gives an overview of my research into them as context for my proposal, but it is
not necessary to read it.

Over the last two decades, _decentralised_ (and a subcategory: _distributed)_
data protocols have become the subject of sustained academic, industry and
activist research. The image below broadly illustrates the difference between
the different types of network.

![1*nnpzTe1hx74WKICL3Gj34A.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f64f892-9e63-49ae-a144-894a750709d9/1nnpzTe1hx74WKICL3Gj34A.jpeg)

To clarify some terms, P2P is a type of distributed system where data is
transferred directly between peers - that is, people and their devices. Another
term that comes up a lot is _federated_. This is a system that looks a lot like
the middle image in the diagram above. Peers can all connect to each other
without the need for a central point, but there are semi-central points. These
semi-central points are computers called _servers_, and data has to flow through
them in a federated system.

A protocol is essentially a specification for how data should be formatted and
what a program needs to do to access it. For P2P and decentralised software, a
protocol is crucial - it’s the way that devices can know how to share data with
each other and make guarantees about that data.

Protocols are all designed with a specific set of features - e.g. some put E2E
encryption at the core, while others are more concerned with making the protocol
simple and easy to use. The BitTorrent protocol, for example, uses a
cryptographic hash to guarantee that the file you download is the one you agreed
to download. It can’t stop you from choosing a torrent that links to a virus,
but it prevents people from sending you their virus through an otherwise good
torrent.

BitTorrent is still dominant in file sharing but ascendant technologies include
IPFS and Hyperdrive. The latter builds on Hypercore (fka Dat), a more general
encrypted peer-to-peer distributed data sharing protocol.

An enormous amount of research has gone into blockchain technology for creating
decentralised ledgers and consensus algorithms, enabling the rise of
cryptocurrencies like Bitcoin and Ether, however these are computationally very
expensive for general purposes in which such high degrees of validation are not
required.

There are two notable protocols specifically designed for social media. The
first is called Secure Scuttlebutt, which is designed to be P2P (distributed),
encrypted, and to work well in situations where users are not connected to the
main internet. Since its initial release in 2014, it’s been championed by a
small community of hackers as a path out of corporate-ruled centralised social
media, and an ecosystem of software implementing the protocol has slowly been in
development.

Another important protocol is called ActivityPub, which is designed for
federated social media. The successor to previous social media protocols like
OStatus and pump.io, the standard was developed and officially released by the
World Wide Web Consortium, giving it institutional legitimacy and bureaucratic
protection. While data is protected using authentication, it does not include
support for E2E encryption, meaning that users must trust the operators of
servers not to access or abuse their data. Nonetheless, use of the protocol has
grown significantly and there are now several fully fledged software projects
that implement it and share data with each each other, together forming what is
sometimes called _the fediverse_. Not all of these are for social media: the
video sharing app PeerTube, and the cloud storage and office suite NextCloud
both implement the protocol. For social networking, Mastodon has become somewhat
well known as a _federated_ alternative to sites like Facebook and Twitter, and
some others include Pleroma and Diaspora.

Mobilizon —-

Dat

Freenet

Locutus

### A side note

To be clear, decentralised technologies are not politically better or worse than
centralised ones. Many large corporations are interested in decentralised or
distributed computing systems because they can work more efficiently for
geographically distributed users. The architecture of the network does not
indicate anything about how that network is governed or controlled from a legal
or political point of view. Likewise, blockchain technologies like
cryptocurrencies are often sold as being somehow politically preferable than
centralised systems like Visa, Paypal or traditional banks, due to the fact that
they are technologically decentralised. This is can be misleading, because the
distribution of major cryptocurrencies (and indirectly, governance and political
control over how they operate in the world) is even more centralised than the
mainstream economy, and mining resources have been increasingly monopolised.

Rather than focusing on abstract ideas like the network topology, it’s more
interesting to consider what freedoms for users are afforded by a technology.
Free and Open Source Software can always be copied and changed by programmers,
who can publish their own version of it. It’s even better if the code is well
documented. But in many situations, having access to the code by itself does not
meaningfully give users enough freedom. If Facebook made all of their code open
source, but still restricted their network connection to servers controlled by
Facebook, this would not meaningfully impact their monopoly over social
networking around the world. People could create their own toy versions of
Facebook that look and feel the same, except for the fact that they are empty of
users. This is a situation in which _the network is the resource that needs to
be made free._
