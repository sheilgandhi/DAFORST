# Scenarios

When developing scenarios it is vital to understand a scenarios importance and coverage. There are a diverse group of personas and cover different people who lead different lives. The scenarios included are to reflect these differences and diversities. The following scenarios are Essiential Use Cases. The Essiential Use Cases were developed by Larry Constantine and Lucy Lockwood, as apart of their Usage-Centered design. Each use case is a structured narrative expressed in application domain language and the language of users.

## Scenario: Uploading an Asset <br/>

**Persona(s):** <br/>
Che Daniels <br/>
Karen Mount <br/>
Amiri Ioane <br/>

| User               | System                     |
| ------------------ | -------------------------- |
| Taps Upload button |                            |
|                    | Navigates to Upload Screen |
| Add Image          |                            |
| Fills out Form     |                            |
|                    | ARCore Image Processing    |
|                    | Upload to IPFS             |
|                    | POST to database           |
|                    | Navigate to Assets Screen  |

## Scenario: Viewing an Asset <br/>

**Persona(s):** <br/>
Che Daniels <br/>
Karen Mount <br/>
Amiri Ioane <br/>

| User                                                   | System                         |
| ------------------------------------------------------ | ------------------------------ |
| Taps Assets button                                     |                                |
|                                                        | Navigates to Assets Screen     |
|                                                        | GETS all Assets from database  |
| User indicate which Asset they wish to look at further |                                |
|                                                        | Navigates to Full Asset Screen |
| User Views Asset                                       |                                |
