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