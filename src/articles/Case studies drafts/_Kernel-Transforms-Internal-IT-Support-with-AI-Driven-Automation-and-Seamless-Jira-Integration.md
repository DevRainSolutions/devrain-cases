# Kernel Transforms Internal IT Support with AI-Driven Automation and Seamless Jira Integration

**_Summary_**
Kernel successfully automated its customer support system by integrating Azure OpenAI and agentic Retrieval Augmented Generation (RAG) with existing tools like Jira, Confluence, and SharePoint Online. This integration improved response times, accuracy, and efficiency, enhancing employee and customer satisfaction.
![](https://devrain.blob.core.windows.net/cases/Kernel_IT_1.png)
**Challenge**
Kernel, a leading agricultural company, faced significant challenges in automating its internal IT support system. The primary issue was integrating Jira, their issue tracker and project management tool, with other systems to provide seamless and efficient support. This challenge is common in IT support automation and involves several key aspects.

Integrating new automation tools with existing IT support infrastructure can be complex, especially when dealing with disparate platforms and technologies. Kernel needed to ensure that the new AI-based system could seamlessly interact with Jira, Confluence, and SharePoint Online without disrupting existing workflows. Automated systems often struggle with complex or nuanced employee inquiries that require human judgment and empathy. Kernel's support team had to ensure that the AI system could handle various inquiries, from simple questions to more complex issues that might need detailed responses.

Automation can sometimes lead to impersonal interactions, which may frustrate employees, especially those with emotionally charged concerns. Kernel aimed to maintain a personal touch in their automated responses to ensure employees felt heard and understood. Ensuring that the automated system could access accurate and up-to-date information was crucial. Poor data management could lead to incorrect or outdated responses. To prevent such issues, the client must regularly update and accurately index content from Confluence, Jira, and SharePoint Online.

**Solution**
DevRain implemented a comprehensive AI-based system using Azure OpenAI and agentic Retrieval Augmented Generation (RAG) to address Kernel's internal IT support challenges. This solution was designed to streamline the support process, enhance response accuracy, and improve overall efficiency.

The AI system operates through two primary user flows. When an employee creates a support request, the AI analyzes the content of the request in real time. By leveraging the extensive knowledge base, which includes data from Confluence, Jira, and SharePoint Online, the AI provides immediate suggestions regarding the essence of the request and possible solutions. This proactive approach helps employees find answers quickly, reducing the need for further assistance and improving their overall experience.

On the other hand, when a support engineer opens a ticket, the AI system has already prepared a draft response or advice on resolving the issue. This draft is based on the AI's analysis of similar past requests and the relevant information retrieved from the knowledge base. By providing a head start on the resolution process, the AI enables support engineers to work more efficiently and focus on more complex tasks that require human judgment.

![](https://devrain.blob.core.windows.net/cases/Kernel_IT_2.png)

**Key Components:**
**1\. Azure OpenAI.** Advanced language model for natural conversation
**2\. Agentic RAG.** Technique to enhance AI responses with the retrieved information
**3\. Data Sources:**
*   **Confluence**: company internal knowledge base
*   **Jira**: issue tracking and project management
*   **SharePoint Online**: internal documents - technical manuals and guides

**Implementation**
The implementation process began with data indexing. Content from Confluence, Jira, and various documents was processed and indexed into the AI knowledge base using Azure Document Intelligence, ensuring that the AI had access to accurate and up-to-date information.
Next, the RAG integration was set up. The system was designed to retrieve relevant information from the AI knowledge base and use Azure OpenAI to answer user queries. To ensure transparency, the system provided citations so users could validate the correctness of the answers.
Real-time updates were crucial for maintaining the system's accuracy. Kernel used REST API, webhooks for Jira and Confluence, and Microsoft Graph API for SharePoint Online to process real-time updates and keep the AI knowledge base current.

**Conclusion**
Kernel improved its customer support efficiency and effectiveness by integrating Azure OpenAI with agentic RAG and leveraging existing knowledge bases. The new system provided faster, more accurate responses, increasing employee and customer satisfaction. Kernel's journey demonstrated that the challenges of customer support automation could be successfully overcome with the right approach and tools.

**References**
[https://devrain.com/blog/crafting-technical-specifications-for-custom-chatgpt-implementations](https://devrain.com/blog/crafting-technical-specifications-for-custom-chatgpt-implementations)
[https://devrain.com/blog/navigating-the-rag-landscape-key-challenges-in-ai-powered-information-retrieval](https://devrain.com/blog/navigating-the-rag-landscape-key-challenges-in-ai-powered-information-retrieval)

**Relative cases**
Enabling Quick Access to Corporate Knowledge with OpenAI: [https://projects.devrain.com/#/Data%20%26%20AI%2FChatGPT%20on%20Your%20Data%2FEnabling-Quick-Access-to-Corporate-Knowledge-with-Agentic-RAG-using-Azure-OpenAI.md](https://projects.devrain.com/#/Data%20%26%20AI%2FChatGPT%20on%20Your%20Data%2FEnabling-Quick-Access-to-Corporate-Knowledge-with-Agentic-RAG-using-Azure-OpenAI.md)
