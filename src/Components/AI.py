"""
Install the Google AI Python SDK

$ pip install google-generativeai

See the getting started guide for more information:
https://ai.google.dev/gemini-api/docs/get-started/python
"""

import os

import google.generativeai as genai

genai.configure(api_key="AIzaSyBrS4g-B_RLCXLcazAo7zKhFH60hLERqww")

# Create the model
# See https://ai.google.dev/api/python/google/generativeai/GenerativeModel
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
  system_instruction="You are Travarna, a friendly assistant who gives significance of the location in less than 150 words and 3 to 5 key events took place in the history about any place in the world and all the tourist recommended info and measures for travelling to that place while interacting friendly with the user. Get the data about the query asked by the user from the google database or from the google search results. Give the results in a json file",
)

chat_session = model.start_chat(
  history=[
    {
      "role": "user",
      "parts": [
        "Hyderabad\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "```json\n{\n  \"significance\": \"Hyderabad, the 'City of Pearls,' is a vibrant metropolis in India, renowned for its rich history, cultural heritage, and modern urban development. It served as the capital of the Qutb Shahi dynasty and later the Nizams, leaving behind a legacy of stunning architectural marvels, intricate bazaars, and a unique Hyderabadi culture.\",\n  \"key_events\": [\n    {\n      \"event\": \"Establishment of the Qutb Shahi dynasty (1591)\",\n      \"description\": \"The Qutb Shahis, a dynasty of Persian origin, established their kingdom in Hyderabad, marking the beginning of a golden era of art, architecture, and cultural flourishing.\"\n    },\n    {\n      \"event\": \"The Nizam's rule (1724-1948)\",\n      \"description\": \"The Asaf Jahi dynasty, known as the Nizams, ruled Hyderabad for over two centuries, transforming it into a significant center of trade and commerce, known for its opulent palaces and grand mosques.\"\n    },\n    {\n      \"event\": \"Integration into India (1948)\",\n      \"description\": \"After India's independence, Hyderabad was integrated into the Indian Union, marking a pivotal moment in the city's history and ushering in a new era of economic and social development.\"\n    },\n    {\n      \"event\": \"IT revolution (1990s)\",\n      \"description\": \"Hyderabad emerged as a major IT hub in the 1990s, attracting numerous multinational companies and transforming the city's skyline with modern skyscrapers and technology parks.\"\n    }\n  ],\n  \"tourist_info\": {\n    \"recommended_places\": [\n      \"Charminar\",\n      \"Golconda Fort\",\n      \"Qutb Shahi Tombs\",\n      \"Salar Jung Museum\",\n      \"Birla Mandir\",\n      \"Ramoji Film City\",\n      \"Hussain Sagar Lake\",\n      \"Chowmahalla Palace\",\n      \"Laad Bazaar\",\n      \"Shilparamam\"\n    ],\n    \"travel_measures\": [\n      \"Hyderabad is well-connected by air, rail, and road.\",\n      \"The best time to visit is during the winter months (October to March) for pleasant weather.\",\n      \"Hyderabad is known for its delicious Hyderabadi cuisine, including biryani, haleem, and qubani ka meetha.\",\n      \"Bargaining is common in local markets, so be prepared to negotiate prices.\"\n    ]\n  }\n}\n```",
      ],
    },
    {
      "role": "user",
      "parts": [
        "Mylavaram",
      ],
    },
    {
      "role": "model",
      "parts": [
        "```json\n{\n  \"significance\": \"Mylavaram, located in Andhra Pradesh, India, is a town known for its religious significance and cultural heritage. It is a popular pilgrimage site for Hindus and is home to the renowned Sri Venkateswara Swamy Temple.\",\n  \"key_events\": [\n    {\n      \"event\": \"Establishment of Sri Venkateswara Swamy Temple\",\n      \"description\": \"The temple is believed to have been established in the 11th century and is dedicated to Lord Venkateswara, an avatar of Lord Vishnu. It is one of the most revered temples in South India and attracts millions of devotees every year.\"\n    },\n    {\n      \"event\": \"Construction of the temple complex\",\n      \"description\": \"Over the centuries, the temple has undergone numerous renovations and expansions, resulting in a sprawling complex with intricate carvings, sculptures, and architectural marvels.\"\n    },\n    {\n      \"event\": \"Annual Brahmotsavam festival\",\n      \"description\": \"The annual Brahmotsavam festival is a major religious event celebrated in the temple with great pomp and ceremony. It attracts thousands of pilgrims and devotees from all over India.\"\n    },\n    {\n      \"event\": \"Growth of Mylavaram as a pilgrimage center\",\n      \"description\": \"Due to the popularity of the temple, Mylavaram has emerged as a significant pilgrimage center, drawing devotees from across the country and abroad.\"\n    }\n  ],\n  \"tourist_info\": {\n    \"recommended_places\": [\n      \"Sri Venkateswara Swamy Temple\",\n      \"Panchamukha Anjaneya Swamy Temple\",\n      \"Sri Lakshmi Narasimha Swamy Temple\",\n      \"Mylavaram Lake\",\n      \"Local markets for handicrafts and souvenirs\"\n    ],\n    \"travel_measures\": [\n      \"Mylavaram is well-connected by road and rail from major cities in Andhra Pradesh.\",\n      \"The best time to visit is during the winter months (October to March) for pleasant weather and the Brahmotsavam festival.\"\n    ]\n  }\n}\n```",
      ],
    },
    {
      "role": "user",
      "parts": [
        "constantinople",
      ],
    },
    {
      "role": "model",
      "parts": [
        "```json\n{\n  \"significance\": \"Constantinople, now known as Istanbul, was a pivotal city in history, serving as the capital of the Roman Empire (later the Byzantine Empire) and later the Ottoman Empire. Its strategic location bridging Europe and Asia made it a center of trade, culture, and power for centuries.\",\n  \"key_events\": [\n    {\n      \"event\": \"Founding of Constantinople by Constantine the Great (330 AD)\",\n      \"description\": \"Constantine I, the Roman Emperor, founded the city on the site of ancient Byzantium, renaming it Constantinople and establishing it as the new capital of the Roman Empire.\"\n    },\n    {\n      \"event\": \"The Byzantine Empire (395-1453 AD)\",\n      \"description\": \"Constantinople became the center of the Byzantine Empire, a vibrant civilization that preserved Greek culture and Christianity, influencing art, literature, and architecture for centuries.\"\n    },\n    {\n      \"event\": \"The Fall of Constantinople to the Ottomans (1453 AD)\",\n      \"description\": \"After a long siege, the Ottoman Empire captured Constantinople, marking the end of the Byzantine Empire and the beginning of the Ottoman rule over the city.\"\n    },\n    {\n      \"event\": \"Istanbul as the capital of the Ottoman Empire (1453-1922 AD)\",\n      \"description\": \"Constantinople, renamed Istanbul, became the capital of the Ottoman Empire, a vast and powerful empire that spanned three continents.\"\n    }\n  ],\n  \"tourist_info\": {\n    \"recommended_places\": [\n      \"Hagia Sophia\",\n      \"Topkapi Palace\",\n      \"Blue Mosque\",\n      \"Grand Bazaar\",\n      \"Spice Market\",\n      \"Bosphorus Strait\",\n      \"Chora Church\",\n      \"Süleymaniye Mosque\"\n    ],\n    \"travel_measures\": [\n      \"Istanbul is a major international hub, easily accessible by air and sea.\",\n      \"The best time to visit is during spring (April-May) and autumn (September-October) for pleasant weather.\",\n      \"Istanbul is a bustling city with a mix of modern and traditional influences, offering a unique cultural experience.\",\n      \"Be prepared for a blend of European and Middle Eastern customs and traditions.\"\n    ]\n  }\n}\n```",
      ],
    },
    {
      "role": "user",
      "parts": [
        "atlantis",
      ],
    },
    {
      "role": "model",
      "parts": [
        "```json\n{\n  \"significance\": \"Atlantis is a legendary island civilization described by the Greek philosopher Plato in his dialogues \"Timaeus\" and \"Critias\".  While its existence remains unproven, it has captured imaginations for centuries, inspiring countless stories, myths, and scientific theories about a lost civilization.\",\n  \"key_events\": [\n    {\n      \"event\": \"Plato's description (c. 360 BC)\",\n      \"description\": \"Plato's dialogues tell the story of Atlantis, a powerful maritime empire that was destroyed by a cataclysmic event, possibly a volcanic eruption or a tsunami. It is described as a technologically advanced civilization with a sophisticated society and a strong military force.\"\n    },\n    {\n      \"event\": \"Search for Atlantis (ancient to modern times)\",\n      \"description\": \"The story of Atlantis has inspired countless explorers, historians, and scientists to search for evidence of its existence. From ancient Greek scholars to modern archaeologists, many have attempted to locate the lost civilization, but no conclusive evidence has been found.\"\n    },\n    {\n      \"event\": \"Atlantis in literature and popular culture\",\n      \"description\": \"Atlantis has become a popular theme in literature, film, and television. From Jules Verne's \"Twenty Thousand Leagues Under the Sea\" to the \"Atlantis\" television series, the legend of the lost civilization has inspired countless stories and fictional narratives.\"\n    },\n    {\n      \"event\": \"Scientific theories about Atlantis\",\n      \"description\": \"Various scientific theories have been proposed to explain the origin and fate of Atlantis, suggesting possible locations based on geological and archaeological evidence, but none have been definitively proven.\"\n    }\n  ],\n  \"tourist_info\": {\n    \"recommended_places\": [\n      \"There are no physical locations related to Atlantis as it is a mythical place. However, you can visit museums and exhibitions that showcase the history of the Atlantis myth and its cultural influence.\"\n    ],\n    \"travel_measures\": [\n      \"While Atlantis remains a mystery, the search for its truth continues to inspire exploration and wonder. You can explore the history and mythology of Atlantis through various resources, including museums, books, and documentaries.\"\n    ]\n  }\n}\n```",
      ],
    },
  ]
)
def AI(city):

  response = chat_session.send_message(city)
  # for i in response:
  #   print(i,response[i])
  print(response.text)