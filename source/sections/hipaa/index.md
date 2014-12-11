#Catalyze HIPAA Compliance

Learn how Catalyze not only complies with HIPAA, but builds a better, more secure environment to mitigate your risk. We did the hard work so you don't have to. Our HIPAA compliant API and platform simplify compliance for you. To learn more about our products or to get setup with an account today, check out our compliant [platform](https://catalyze.io/platform-as-a-service/) and [API](https://catalyze.io/backend-as-a-service/).

In an effort to be transaparent, we go into a good amount detail on this page. As a lead in, below is a high level summary our major architecture, our guiding principles, and how it maximizes our security posture.

Need | Catalyze Approach
--------- | -----------
Encryption  | All data is encrypted in transit, end to end, and at rest. Log data is also encypted to mitigate risk of ePHI stored in log files.
Minimum Necessary Access | Access controls are always defaulted to no access unless overrided manually.
System Access Tracking | All access requests and changes of access, as well as approvals, are tracked and retained.
PHI Segmentation | Using our APIs for users or clinical data, stored data is segmented both logically and physically. This separates personally identifiable information (PII) and health-related information, mitigating risk of unauthorized access to ePHI.
Monitoring | All network requests, successful and unsuccessful, are logged, along with all system logs. PHI requests (GET, POST, PUT, DELETE) log the requestor, location, and data changed/viewed. Additionally, alerts are proactively sent based on suspicious activity. OSSEC is used for IDS and file integrity monitoring.
Auditing | All log data is encrypted and unified, enabling secure access to full historical network activity records.
Minimum Risk to Architecture | API access is the only form of public access enabled to servers; all API access must first pass through Catalyze firewalls. To gain full access to Catalyze systems, users must login via 2 factor authentication through VPN, authenticate to the specific system as a regular user, and upgrade privileges on the systems termporarily as needed.
Documentation | All documentation is stored and versioned using Github, and published [here](https://catalyze.io/policy/).
Risk Management | We proactively perform risk assessments to assure changes to our infrastructure do not expose new risks to ePHI. Risks mitigation is done before changes are pushed to production.
Workforce Training | Despite not having access to the ePHI of our customers, all Catalyze workforce members undergo HIPAA and security training regularly. Current training is hosted [here](https://training.catalyze.io/).

See the finer grain details of how we comply with HIPAA below. These are mapped to specific HIPAA rules. There's a lot here but again, we are taking this responsibility on so that our customers don't have to. Controls marked with an (Req) are *Required*. Controls marked with an (A) are *Addressable*. In our environment, controls outlined below are implemented on all infrastructure that processes, stores, transmits or can otherwise gain access to ePHI (electronic protected health information). The referenced controls are listed on the left, recommendation in the middle, and Catalyze compliant implementation on the right. If you're interesting in seeing our specific policy documents, please [email us](mailto:hipaa@catalyze.io).

#Administrative Safeguards (see <a href="http://www.hhs.gov/ocr/privacy/hipaa/administrative/securityrule/adminsafeguards.pdf">164.308</a>)

Taken directly from the wording of the Security Rule, administrative safeguards are *administrative actions, and policies and procedures, to manage the selection, development, implementation, and maintenance of security measures to protect electronic protected health information and to manage the conduct of the covered entityâ€™s workforce in relation to the protection of that information.*

There aren't specific security settings in this section, and the most important area covered is the risk assessment. The Risk assessments is a great process for any organization that wants to become compliant.

##Security Management Process - 164.308(a)(1)(i)

```
Catalyze, Inc. has a risk management policy that defines the risk analysis and risk management process in place. Catalyze uses NIST800-30 and 800-26 for performing risk analysis. Our policy begins with an inventory of all Catalyze systems, mapping of where ePHI is processed, transmitted, or stored, identification of threats, risks, and likelihood, and the mitigation of risks. Policies address risk inherent within the environment and mitigating the risk to an acceptable and reasonable level.

Catalyze has a Sanction Policy that has sanctions for employees not adhering to certain policies, and for specifically violating HIPAA rules.

Policies and procedures address the requirements of monitoring and logging system level events and actions taken by individuals within the environment. All requests into and out of the Catalyze network are logged, as well as all system events using Logstash. Catalyze, has implemented multiple logging and monitoring solutions to track events within their environment and to monitor for certain types of behavior. Additionally, proactive alerts are enabled and triggered based on certain suspicious activity.
```

Standard | Description
--------- | -----------
Risk Analysis (Req)  | Conduct an accurate and thorough assessment of the potential risks and vulnerabilities to the confidentiality, integrity, and availability of electronic PHI held by the covered entity.
Risk Management (Req) | Implement security measures sufficient to reduce risks and vulnerabilities to a reasonable and appropriate level to comply with Sec. 164.306(a) [Security standards: General rules; (a) General requirements].
Sanction Policy (Req) | Apply appropriate sanctions against workforce members who fail to comply with the security policies and procedures of the covered entity.
Information System Activity Review (Req) | Implement procedures to regularly review records of information system activity, such as audit logs, access reports, and security incident tracking reports.

##Assigned Security Responsibility - 164.308(a)(2)

```
Catalyze, Inc. has formally assigned and documented its security officer. Our security office is [Ben Uphoff](malto:ben@catalyze.io).
```

Standard | Description
--------- | -----------
Assigned Security Responsibility (Req) | Identify the security official who is responsible for the development and implementation of the policies and procedures required by this subpart for the entity.

##Workforce Security - 164.308(a)(3)(i)

```
Catalyze, Inc. has policies in place that require workforce members requesting access to ePHI submit an authorization form that is signed and acknowledges their responsibility of safeguarding ePHI. The form must also be approved by the supervisor and customer. Once signed and approved, then the individual will be provisioned access to systems deemed business necessary. All Access to ePHI is based on minimum necessary requirements and least privilege. Catalyze cannot access ePHI unless customers explicitly grant access.

Catalyze policies define the immediate removal of access once an employee has been terminated, with the Security Officer responsible for terminating the access. Once HR initiates the termination process the termination checklist is reference to ensure necessary actions are taken to remove systems and facilities access.
```

Standard | Description
--------- | -----------
Authorization and/or Supervision (A) | Implement procedures for the authorization and/or supervision of workforce members who work with electronic protected health information or in locations where it might be accessed.
Workforce Clearance Procedure (A) | Implement procedures to determine that the access of a workforce member to electronic protected health information is appropriate.
Termination Procedures (A) | Implement procedures for terminating access to electronic protected health information when the employment of a workforce member ends or as required by determinations made as specified in paragraph (a)(3)(ii)(B) [Workforce Clearance Procedures] of this section.

##Information Access Management - 164.308(a)(4)(i)

```
Catalyze, Inc. does not perform the functions of a Healthcare Clearinghouse so aspects of this section are not applicable.

The security officer determines the roles necessary for each system and application. When access is needed to Catalyze infrastructure, a request and acknowledgement form is signed and then approved by the individualâ€™s supervisor. In the case of access to ePHI, customers must grant explicit access to Catalyze.

Catalyze, Inc. has a formal process for requesting additional access to what employees are provisioned, and again Catalyze customers must approve all requests concerning ePHI.
```

Standard | Description
--------- | -----------
Isolating Health care Clearinghouse Function (Req) | If a health care clearinghouse is part of a larger organization, the clearinghouse must implement policies and procedures that protect the electronic protected health information of the clearinghouse from unauthorized access by the larger organization.
Access Authorization (A) | Implement policies and procedures for granting access to electronic protected health information, for example, through access to a workstation, transaction, program, process, or other mechanism.
Access Establishment and Modification (A) | Implement policies and procedures that, based upon the entity's access authorization policies, establish, document, review, and modify a user's right of access to a workstation, transaction, program, or process.

##Security Awareness and Training - 164.308(a)(5)(i)

```
Catalyze, Inc has a Security Awareness training policy in place that requires new employees and current employees to conduct training upon hire and annually thereafter. Minimum training is done annually, with regularly informal security and compliance traning done every other week.

Catalyze, Inc. proactively assesses and tests for malicious software within their environment, both infrastructure and workstations.

Catalyze, Inc. is monitoring and logging successful and unsuccessful log-in attempts to the servers within its environment and policies are in place requiring audit logging, which includes login attempts.

Password configurations are set to require that passwords are a minimum of 7 character length, 90 day password expiration, account lockout after 5 invalid attempts, password history of last 4 passwords remembered, and account lockout after 15 minutes of inactivity.
```

Standard | Description
--------- | -----------
Security Reminders (A) | Periodic security updates to all members of Catalyze, Inc.
Protection from Malicious Software (A) | Procedures for guarding against, detecting, and reporting malicious software.
Log-in Monitoring (A) | Procedures for monitoring log-in attempts and reporting discrepancies.
Password Management (A) | Procedures for creating, changing, and safeguarding passwords.

##Security Incident Procedures - 164.308(a)(6)(i)

```
Catalyze has implemented a formal incident response plan (IRP), which discusses the procedures for identifying, responding to, and escalating suspected and confirmed security breaches. Catalyze has implemented an incident response team for the purposes of dealing with potential security breaches. The IRP has specific types of incidents to look out for, as well as some common types of incidents that are monitored for within the environment.
```

Standard | Description
--------- | -----------
Response and Reporting (Req) | Identify and respond to suspected or known security incidents; mitigate, to the extent practicable, harmful effects of security incidents that are known to the covered entity; and document security incidents and their outcomes.

##Contingency Plan - 164.308(a)(7)(i)

```
Catalyze, Inc has a formal Backup and Recovery Policy that defines the data backup strategy including: Schedule, associated responsibilities, and any risk-assessed exclusion to the backup schedule.

Catalyze, Inc has a formal Disaster Recovery plan to ensure the efficient recovery of critical business data and systems in the event of a disaster. The DR plan includes specific technical procedures necessary to reinstate the infrastructure and data to allow critical business functions to continue business operations after a disaster has occurred. Additionally, the Catalyze DR plan includes requirements for performing annual testing of the DR plan to ensure its effectiveness.

Catalyze, Inc. has a Business Continuity Plan (BCP) to aid in the efficient recovery of critical business functions after a disaster has been declared. The BCP goes into effect after facility outage of 24 hours. The BCP identifies critical information necessary to resume business operations such as: Hardware/software requirements, recovery time objectives, forms, employee/vendor contact lists, alternate working procedures, emergency access procedures, and a data and application criticality analysis. The BCP includes an Emergency Mode Operations Plan that addresses the access and protection of ePHI while operating in emergency mode.

The DR and BPC plans are reviewed and tested annually or whenever significant infrastructure changes occur.

Catalyze, Inc has a performed an applications and data criticality analysis that details what systems and application need be recovered and their specific order in the recovery process.
```

Standard | Description
--------- | -----------
Data Backup Plan (Req) | Establish and implement procedures to create and maintain retrievable exact copies of electronic protected health information.
Disaster Recovery Plan (Req) | Establish (and implement as needed) procedures to restore any loss of data.
Emergency Mode Operation Plan (Req) | Establish (and implement as needed) procedures to enable continuation of critical business processes for protection of the security of electronic PHI while operating in emergency mode.
Testing and Revision Procedure (A) | Implement procedures for periodic testing and revision of contingency plans.
Applications and Data Criticality Analysis (A) | Assess the relative criticality of specific applications and data in support of other contingency plan components.

##Evaluation - 164.308(a)(8)

```
Catalyze, Inc. has formal internal policies and procedures for conducting periodic technical and non-technical testing. These define procedures for performing quarterly internal and external vulnerability scanning, as well as annual penetration testing. Vulnerability scanning is performed with any major changes in infrastructure. Additionally, non-technical evaluations occur on an annual basis to ensure that the security posture of Catalyze is at the defined level, approved by management, and communicated down to Catalyze employees.
```

Standard | Description
--------- | -----------
Evaluation (Req) | Perform a periodic technical and non-technical evaluation, based initially upon the standards implemented under this rule and subsequently, in response to environmental or operational changes affecting the security of electronic PHI that establishes the extent to which an entity's security policies and procedures meet the requirements of this subpart.

##Business Associate Contracts and Other Arrangement - 164.308(b)(1)

```
Catalyze, Inc. has a formalized template, as well as policies in place regarding Business Associate Agreements and written contracts. Catalyze has engaged a third part provider for hosting responsibilities and has written attestations of safeguarding its data. Additionally, Catalyze performs due diligence in assuring that third party providers they select go through their due diligence process and provide services consistent with Catalye's security and compliance posture.
```

Standard | Description
--------- | -----------
Written Contract or Other Arrangement (Req) | A covered entity, in accordance with Â§ 164.306 [Security Standards: General Rules], may permit a business associate to create, receive, maintain, or transmit electronic protected health information on the covered entityâ€™s behalf only if the covered entity obtains satisfactory assurances, in accordance with Â§ 164.314(a) [Business Associate Contracts or Other Arrangements] that the business associate will appropriately safeguard the information. Document the satisfactory assurances required by paragraph (b)(1) [Business Associate Contracts and Other Arrangements] of this section through a written contract or other arrangement with the business associate that meets the applicable requirements of Â§ 164.314(a) [Business Associate Contracts or Other Arrangements].

#Physical Safeguards (see <a href="http://www.hhs.gov/ocr/privacy/hipaa/administrative/securityrule/physsafeguards.pdf">164.310</a>)

This one is pretty straight forward - *physical measures, policies, and procedures to protect a covered entityâ€™s electronic information systems and related buildings and equipment, from natural and environmental hazards, and unauthorized intrusion.* Data center security is typically easier to address than office security, though at Catalyze we address both.

##Facility Access Controls - 164.310(a)(1)

```
Catalyze, Inc. infrastructure supporting the its environment is hosted at Rackspace, which provides hosting and recovery services for the infrastructure.

Catalyze headquarters also has any written policies and procedures for safeguarding the corporate location, which includes workstations with access to the environment, from unauthorized physical access. Smart locks are used to track access and all visitors are logged and escorted.

The Catalyze environment is entirely hosted and built on hardware components provided by Rackspace, which Catalyze would never have access into.
```

Standard | Description
--------- | -----------
Contingency Operations (A) | Establish (and implement as needed) procedures that allow facility access in support of restoration of lost data under the disaster recovery plan and emergency mode operations plan in the event of an emergency.
Facility Security Plan (A) | Implement policies and procedures to safeguard the facility and the equipment therein from unauthorized physical access, tampering, and theft.
Access Control and Validation Procedures (A) | Implement procedures to control and validate a person's access to facilities based on their role or function, including visitor control, and control of access to software programs for testing and revision.
Maintenance Records (A) | Implement policies and procedures to document repairs and modifications to the physical components of a facility which are related to security (for example, hardware, walls, doors, and locks).

##Workstation Use - 164.310(b)

```
Catalyze, Inc. has policies in place that define the acceptable uses in place for workstations within the environment. These policies define the acceptable and unauthorized uses of personnel that provided workstations with access to systems potentially interacting with ePHI. These policies are enforced on all workstations. All internal email uses HIPAA-compliant vendors.
```

Standard | Description
--------- | -----------
Workstation Use (Req) | Implement policies and procedures that specify the proper functions to be performed, the manner in which those functions are to be performed, and the physical attributes of the surroundings of a specific workstation or class of workstation that can access ePHI.

##Workstation Security - 164.310c

```
Catalyze has a formal Workstation and Portable Media Security Policy that identifies the specific requirements of each device. The policies define the requirements for using and/or restricted specific actions while engaged with any ePHI. Additionally, workstations are secured appropriately to limit exposure to breaches. Firewalls and hard disk encryption are used on all workstations. Actions and events are monitored and controlled, with user restrictions on downloading or copying any ePHI without documented approval and business justification. Additionally, all file storage internally at Catalyze utilizes HIPAA-compliant cloud-based vendors (currently Box and Google Apps).
```

Standard | Description
--------- | -----------
Workstation Security (Req) | Implement physical safeguards for all workstations that access ePHI, to restrict access to authorized users.

##Device and Media Controls - 164.310(d)(1)

```
Catalyze has polcies and procedures for all workstations that interact with and may potentially become exposed to ePHI. These policies have requirements for secure media disposal so that ePHI cannot be recovered from these systems.

Catalyze has Media Re-use requirements for the workstations, despite the fact that these workstations do not have access to and interaction with ePHI.
```

Standard | Description
--------- | -----------
Disposal (Req) | Implement policies and procedures to address the final disposition of ePHI, and/or the hardware or electronic media on which it is stored.
Media Re-use (Req) | Implement procedures for removal of ePHI from electronic media before the media are made available for re-use.
Accountability (A) | Maintain a record of the movements of hardware and electronic media and any person responsible therefore.
Data Backup and Storage (A) | Create a retrievable, exact copy of electronic protected health information, when needed, before movement of equipment.

##Technical Safeguards (see <a href="http://www.hhs.gov/ocr/privacy/hipaa/administrative/securityrule/techsafeguards.pdf">164.312</a>)

This section of HIPAA outlines *the technology and the policy and procedures for its use that protect electronic protected health information and control access to it.* It is important to note that these requirements are not presecriptive, and there is flexibility in implementation. The key is that measures that are reasonabale and appropriate are implemented to safegaurd ePHI.

##Access Control - 164.312(a)(1)

```
All users within the Catalyze environment are issued a unique user name and password. All accounts are local and unique. General/shared accounts are not in place and root access is restricted and monitored.

Catalyze has procedures and a process for obtaining access to ePHI should an emergency or disaster occur.

Catalyze systems settings on all of its servers have session timeout features enabled and configured to terminate sessions after a period of 30 minutes or less.

Catalyze encrypts all stored data in its environment using 256-bit AES encryption. Additionally, all data in transit is encrypted end to end (more below).
```

Standard | Description
--------- | -----------
Unique User Identification (Req) | Assign a unique name and/or number for identifying and tracking user identity.
Emergency Access Procedure (Req) | Establish (and implement as needed) procedures for obtaining necessary electronic protected health information during an emergency.
Automatic Logoff (A) | Implement electronic procedures that terminate an electronic session after a predetermined time of inactivity.
Encryption and Decryption (A) | Implement a method to encrypt and decrypt electronic protected health information.

##Audit Controls - 164.312(b)

```
Catalyze, Inc. has policies in place addressing audit trail requirements. Systems within the its environment are logging to a centralized logging solution, Logstash, which is monitoring system level events and contains user id, timestamp, event, origination, and type of event. These logs are constantly monitored for suspicious events and alerts are generated to any type of behavior that is suspicious.
```

Standard | Description
--------- | -----------
Audit Controls (Req) | Implement hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use ePHI.

##Integrity - 164.312c(1)

```
Catalyze has employed a centralized access control system for authenticating and accessing internal systems where ePHI resides. Currently, Catalyze employees access a bastion host using an SSH-2 connection to access internal systems. Accounts on the internal database are restricted to a limited number of personnel, with logging in place to track all transactions.
```

Standard | Description
--------- | -----------
Mechanism to Authenticate Electronic Protected (A) | Implement electronic mechanisms to corroborate that electronic protected health information has not been altered or destroyed in an unauthorized manner.

##Person or Entity Authentication - 164.312(d)

```
Catalyze, Inc. has a formal policy that describes the process of verifying a personâ€™s identity before unlocking their account, resetting their password, and/or providing access to ePHI.
```

Standard | Description
--------- | -----------
Person or Entity Authentication (Req) | Implement procedures to verify that a person or entity seeking access to ePHI is the one claimed.

##Transmission Security - 164.312(e)(1)

```
All data in transit with Catalyze is sent over internet connections through an SSLv3/TLS1.2 encrypted mechanism. Load balancers segment the traffic and send transmissions of the data to the application servers via SSLv3 encryption. Additionally, none of the internal application servers, database servers, and log and monitoring servers are accessible via public internet. All internal servers must be accessed via bastion host which are not accessible from the internet and require an SSH connection.
```

Standard | Description
--------- | -----------
Integrity Controls (A) | Implement security measures to ensure that electronically transmitted ePHI is not improperly modified without detection.
Encryption (A) | Implement a mechanism to encrypt ePHI in transit.

#Organizational Requirements (see <a href="http://www.hhs.gov/ocr/privacy/hipaa/administrative/securityrule/pprequirements.pdf">164.314</a>)

These requirements simply outline the need for business associate agreements (BAAs) between covered entities and business associates. This requirement has recently been extended to require business associate agreements between business associates and all subcontractors. That linking, chaining together of of BAAs, has created for new and interesting legal and business questions. Basically, each layer in the chain of BAAs takes on certain responsibilities and certain risks as part of HIPAA, and there needs to be consistency. Case in point, at Catalyze we have several customers that have moved over from compliant IaaS providers because those providers had breach notification timelines that were not acceptable for large healthcare enterprises. We've taken a proactive approach to BAAs to mitigate risk for our customers and assure consistency along the chain of BAAs.

##Business Associate Contracts or Other Arrangements - 164.314(a)(1)(i)

```
Catalyze has a formalized policy and process is in place concerning BAAâ€™s. BAA templates are in place and BA contracts are reviewed for consistency. All paying customers on Catalyze have BAAs in place. Catalyze has a formal policy and process in place for performing due diligence with any third party or vendor before engaging them. Additionally, contracts are retained that detail the responsibility of safeguarding any information to which the provider may have access, as well as creating consistency for Catalyze and Catalyze customers.
```
Standard | Description
--------- | -----------
Business Associate Contracts (Req) | The Implementation Specifications for the HIPAA Security Rule Organizational Requirements "Business Associate Contracts or Other Arrangements" standard were evaluated under section 164.308(b)(1) above.
Other Arrangements (Req) | Rules to engaging with additional 3rd parties, like subcontractors.

#Policies and Procedures and Documentation Requirements (see <a href="http://www.hhs.gov/ocr/privacy/hipaa/administrative/securityrule/pprequirements.pdf">164.316</a>)

##Policies and Procedures - 164.316(a)
```
Catalyze has a formalized Policy Management program that ensures that policies are developed, implemented, and updated according to best practice and organization requirements. In the words of our auditors, this is a policy about our policies.
```
Standard | Description
--------- | -----------
Policies and Procedures (Req) | Implement reasonable and appropriate policies and procedures to comply with the standards, implementation specifications, or other requirements of this subpart, taking into account those factors specified in Â§ 164.306(b)(2)(i), (ii), (iii), and (iv). This standard is not to be construed to permit or excuse an action that violates any other standard, implementation specification, or other requirements of this subpart.

##Documentation - 164.316(b)(1)(i)

```
Catalyze retains the necessary policies and documentation for a minimum of 6 years. All policies and procedures are available and distributed to personnel on the company shared drive (curently Box). Catalyze has an update and review process for reviewing all policies and procedures and updating them as necessary. Additionally, Catalyze tracks and maintains revision history, approval signature, and timestamps to ensure policies are reviewed and updated according to organization requirements.
```
Standard | Description
--------- | -----------
Time Limit (Req) | Retain the documentation required by paragraph (b)(1) of this section for 6 years from the date of its creation or the date when it last was in effect, whichever is later.
Availability (Req) | Make documentation available to those persons responsible for implementing the procedures to which the documentation pertains.
Updates (Req) | Review documentation periodically, and update as needed, in response to environmental or operational changes affecting the security of the electronic protected health information.

#HITECH Act and Omnibus Rule: <a href="http://www.gpo.gov/fdsys/pkg/FR-2013-01-25/pdf/2013-01073.pdf">IT Security Provisions</a>

These were updates made to strengthen the Privacy, Security, and Breach Notifications rules within HIPAA. These updates went into effect in 2013 and were the driving force for many existing IaaS vendors to begin signing BAAs.

##Notification in the Case of Breach - 13402(a) and 13402(b)

```
Catalyze has a formal breach notification policy that addresses the requirements of notifying affected individuals and customers of a suspected breach of ePHI. These policies outline the relevant and responsible parties in case of a breach, forensics work to discover extent of breach, reason for breach, correction of infrastructure to prevent future breach, and requirements of notifying customers of a breach within 24 hours. Catalyze is a defined Business Associate or subcontractor according to HIPAA regulations and the specific customer relationship.
```
Standard | Description
--------- | -----------
In General | A covered entity that accesses, maintains, retains, modifies, records, stores, destroys, or otherwise holds, uses, or discloses unsecured protected health information (as defined in subsection (h)(1)) shall, in the case of a breach of such information that is discovered by the covered entity, notify each individual whose unsecured protected health information has been, or is reasonably believed by the covered entity to have been, accessed, acquired, or disclosed as a result of such breach.
Notification of Covered Entity by Business Associate | The requirements for the HITECH Act Notification in the Case of Breach - Notification of Covered Entity by Business Associate - Uses and Disclosures: Organizational Requirements "Business Associate Contracts" standard are located in the "BA Requirements" worksheet.

##Timeliness of Notification - 13402(d)(1)

```
Catalyze has a breach notification policy that addresses the requirements of notifying the affected individuals or customers within 24 hours of a breach.
```
Standard | Description
--------- | -----------
In General | Subject to subsection (g), all notifications required under this section shall be made without unreasonable delay and in no case later than 60 calendar days after the discovery of a breach by the covered entity involved (or business associate involved in the case of a notification required under subsection (b)).

##Content of Notification - 13402(f)(1)

```
Catalyze has Breach Notification policies in place and they include a brief description of the breach, including the date of the breach and the date of the discovery of the breach, if known. Catalyze breach notification policies include a description of the types of unsecured protected health information that were involved in the breach (such as whether full name, Social Security number, date of birth, home address, account number, diagnosis, disability code or other types of PII were involved) and what the source of the breach was. Our breach notification policies include steps the individual should take to protect themselves from potential harm resulting from the breach. Our policies also provide the contact procedures for individuals to ask questions or learn additional information, which includes a toll-free telephone number, an e-mail address, Web site, or postal address.
```
Standard | Description
--------- | -----------
Description of Breach | Regardless of the method by which notice is provided to individuals under this section, notice of a breach shall include, to the extent possible, the following: (1) A brief description of what happened, including the date of the breach and the date of the discovery of the breach, if known.
Description of EPHI Involved | (2) A description of the types of unsecured protected health information that were involved in the breach (such as full name, Social Security number, date of birth, home address, account number, or disability code).
Actions by Individuals | 3) The steps individuals should take to protect themselves from potential harm resulting from the breach.
Contact Procedures | (5) Contact procedures for individuals to ask questions or learn additional information, which shall include a toll-free telephone number, an e-mail address, Web site, or postal address.