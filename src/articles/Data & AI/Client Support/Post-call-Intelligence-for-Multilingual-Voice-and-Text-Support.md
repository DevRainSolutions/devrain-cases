# Post-call Intelligence for Multilingual Voice and Text Support

### Client Overview
A national banking service provider operating in a regulated industry with strict data residency requirements. The company handles thousands of customer calls daily, offering voice and text-based support in Ukrainian, Russian, and mixed regional dialects (surzhyk).
### Objective
To automate the analysis of customer service conversations after each interaction—extracting insights, tasks, and sentiment—while maintaining full data privacy and supporting complex multilingual and overlapping speech scenarios.
### Challenges
**High Call Volume**
The support team processes thousands of voice calls per day, far beyond what can be manually reviewed. There was no scalable way to extract insights or monitor compliance.
**Offline Requirements**
Due to internal policies, all processing had to occur on-premises. Cloud-based speech recognition services were not an option.
**Mono Audio Channels**
All audio was recorded in mono, where both speakers (agent and client) are recorded on the same track. This created difficulty in identifying who was speaking and when, especially when they spoke over each other.
**Language Mixing**
Many conversations included multiple languages or regional dialects, often switching mid-sentence. Most commercial ASR systems failed to accurately transcribe these hybrid dialogues.
### Solution
**1\. Whisper-Based Transcription Engine**
The team deployed an internal version of OpenAI’s Whisper model, fine-tuned for their acoustic environment and language mix. Whisper’s multilingual and noise-tolerant architecture enabled reliable transcription, even in mixed-language and informal speech scenarios.
**2\. Speaker Diarization Layer**
Custom diarization logic was built to segment mono audio by speaker turns using overlapping waveform detection, pause analysis, and Whisper timestamps. This allowed separation of agent vs. client utterances—even in overlapping scenarios.
**3\. Fully Offline Architecture**
The entire system was packaged in a Docker container, deployed on-premises. This ensured full control over data privacy and compliance, without reliance on external APIs.
**4\. Configurable Quality-Speed Tradeoffs**
Two processing modes were introduced:
*   _Real-time mode_: lightweight model for rapid transcription with acceptable accuracy.
*   _Analytic mode_: full model for high-accuracy transcripts and sentiment tagging, used for audits and training purposes.
* * *

Ми провели кілька тестів і маємо наступні результати.
1. Whisper розгорнутий локально.
2. Використані різні моделі (small/medium).
3. Досліджено кілька синтетичних та реальних аудіофайлів.

Маємо два основні сценарії:
1. Аудіо з єдиною мовою (можливе використання суржику)
2. Двомовні розмови

У першому випадку Whisper справляється або відмінно або добре.

У другому випадку - немає жодної моделі, яка підтримує кілька мов одночасно. Однак, ми можемо вказати бажану мову і тоді Whisper буде намагатись перекладати. Ось приклад двомовного діалогу у випадку, коли обрана російська і українська мова як основна (українська дає кращі результати але все одно не ідеально):

Є варіант різати аудіо на частини і розпізнавати кожну фразу, але пропоную це перенести на можливу фазу 2, а зараз сконцентруватись на одномовних записах (і записах, де вживається суржик).

Що потрібно дослідити:
1. Швидкість розпізнавання.
2. Необхідні ресурси.
3. Створити середовище для тестування та оцінювання результатів (як варіант - контейнер, який можна швидко розгортати на різні віртуалки/сервери).
