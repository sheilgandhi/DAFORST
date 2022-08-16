# STRIDE Analysis

In 1999, Micosoft's Loren Kohnfelder and Praerit Garg developed STRIDE as a way to identify attacks that software tends to experience. STRIDE, an acronym for, Spoofing, Tampering, Repudiation, Information disclosure, Denial of Service, and Elevation of Privilege is a threat analysis model and is considered a left shift approach. The aim being to identify and eliminate any potential threats to a system before any code is written. Foreseeable threats for this system could be: sensitive information exposed in routing information, Android vulnerabilities, and Man In The Middle attacks.

STRIDE has five properties per threat. Those being: Threat, Property Violated, Threat Definiton, Typical Victims, Examples. This is done for each threat, e.g., Spoofing, Tampering, Repudiation, Information disclosure, Denial of Service, and Elevation of Privilege. For example:

| Threat    | Property Violated | Threat Definiton                                        | Typical Victims                    | Examples                                                              |
| --------- | ----------------- | ------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------- |
| Tampering | Integrity         | Modifying something on disk, on a network, or in memory | Data stores, data flows, processes | Changing the Persistant Cloud Anchors app to a malacious application. |

Let's break down each threat to understand it better. Spoofing is the impersonation of someone or something other than yourself. Typical victims include processes, external entities, and people. Tampering is to modify something. Likely victims for this threat are data stores, data flows, and processes. Repudiation is to not claim responsibility for an action. However, repudiation can be honest or false. Victims of repudiation are processes. Information Disclosure is providing information to someone who is not authorised. Typical victims include processes, data stores, and data flows. Denial of Service is to absorb resources needed to provide a service. The victims again are processes, data stores, and data flows. Elevation of Privilege is allowing someone to do someting they are not authorised to do. The victim of this threat is process.

## How attackers will realise the attack

The following is a STRIDE-per-element table. Using this variation of STRIDE allows for more prescriptive observations and allows cyber security personnel to focus on each element of the system.

| Element                              | Spoofing                                                              | Tampering                                                             | Repudiation | Information Disclosure | Denial of Service                                 | Elevation of Privilege |
| ------------------------------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------- | ---------------------- | ------------------------------------------------- | ---------------------- |
| Persistent Cloud Anchors Application | Changing the Persistant Cloud Anchors app to a malacious application. | Changing the Persistant Cloud Anchors app to a malacious application. |             |                        |                                                   |                        |
| IPFS                                 |                                                                       | Change the destination of the IPFS Upload                             |             |                        |                                                   |                        |
| React Native App                     |                                                                       |                                                                       |             |                        |                                                   |                        |
| Users                                |                                                                       |                                                                       |             |                        |                                                   |                        |
| PostgreSQL Database                  |                                                                       |                                                                       |             |                        | Botnets spamming requests through the application |                        |
| s                                    |                                                                       |                                                                       |             |                        |                                                   |                        |
| s                                    |                                                                       |                                                                       |             |                        |                                                   |                        |
|                                      |                                                                       |                                                                       |             |                        |                                                   |                        |