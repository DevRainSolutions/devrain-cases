# DonorUA Improves Blood Donor Search Through Social Listening and NLP

**_Summary_**
DonorUA, a Ukrainian nonprofit organization, has revolutionized the blood donor recruitment process by leveraging cutting-edge AI and modern technology. This initiative aims to address the critical need for blood donations, as highlighted by the World Health Organization (WHO), which reports varying donation rates across different income countries. Specifically, high-income countries collect 40% of global blood donations, while low-income countries struggle with significantly lower rates. DonorUA's mission is to ensure timely access to blood for patients in Ukraine, especially amidst the ongoing challenges posed by the conflict in the region.
### **Challenge**
Social networks are inundated with posts from individuals and blood centers requesting blood donations. Unfortunately, many of these posts go unnoticed due to the sheer content volume. DonorUA sought to develop a solution to efficiently monitor social media platforms and identify these urgent requests. The challenge was creating a system capable of filtering through vast amounts of data to pinpoint genuine blood donation needs, ensuring that no critical request is overlooked.

### **Solution**
To tackle this challenge, DonorUA engineered an application on Microsoft Azure, utilizing sophisticated AI tools to monitor and analyze blood donation requests on social media. The project began with the implementation of YouScan, an advanced social listening tool, to identify relevant posts on Twitter. By filtering posts based on specific keywords and phrases, such as "blood donors required" and "blood donors needed," the system ensures that only pertinent requests are captured.
### Implementation
The system incorporates a robust classification model powered by AI, which distinguishes genuine donor requests from unrelated posts. Non-pertinent posts are systematically excluded from the dataset. Additionally, the integration of Microsoft's Language Understanding service enhances the extraction of meaningful information from the collected data. This service identifies key details such as the location of blood centers, the specific blood type and Rh factor required, the number of blood units needed, and pertinent contact information.
![](https://devrain.com/img/donorua-social-listening.gif)

### Generative AI Update
The use of large language models further refines the system's capabilities, allowing for better context understanding and named entity recognition. This advancement ensures that the system can accurately interpret and respond to the nuances of each request.
Given the following tweet:
> Urgent: O+ blood needed for a patient ( kid ) at AEH, Addu City. Plz contact 7847565 if you can donate or can find a donor for the kid. Plz share and help.
It can be transformed into named entities like:

| Attribute | Details |
| ---| --- |
| Urgency | Urgent |
| Blood Type | O+ |
| Location | Addu City |
| Hospital | AEH |
| Contact Details | 7847565 |

This data can be easily extracted and analyzed to perform quick and professional support and healthcare services.
### Conclusion
DonorUA's innovative approach demonstrates the transformative potential of AI and modern technology in addressing critical healthcare challenges. By optimizing the recruitment of blood donors through advanced social listening and natural language processing, DonorUA sets a new standard for nonprofit organizations worldwide.
