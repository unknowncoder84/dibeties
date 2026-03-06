// AI Consultant Service with OpenRouter Integration

const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || '';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Pre-configured responses for common diabetes questions
const PRE_CONFIGURED_RESPONSES: Record<string, string> = {
  'hello': 'Hello! I\'m your AI Health Consultant. I\'m here to help you with diabetes management, nutrition advice, and lifestyle recommendations. How can I assist you today?',
  'hi': 'Hi there! I\'m your AI Health Consultant specialized in diabetes care. Feel free to ask me about blood sugar management, diet plans, exercise routines, or any health concerns.',
  'help': 'I can help you with:\n\n• Blood glucose management tips\n• Diabetic diet recommendations\n• Exercise and lifestyle advice\n• Understanding your health reports\n• Medication reminders\n• Symptom assessment\n\nWhat would you like to know?',
  'glucose': 'For optimal blood glucose management:\n\n1. Monitor regularly (fasting and post-meal)\n2. Maintain consistent meal times\n3. Choose low glycemic index foods\n4. Stay hydrated\n5. Exercise regularly\n6. Manage stress levels\n\nYour target fasting glucose should be 70-100 mg/dL. Would you like specific diet recommendations?',
  'diet': 'Recommended diabetic diet plan:\n\n**Foods to Include:**\n• Whole grains (brown rice, oats, quinoa)\n• Leafy vegetables (spinach, methi, palak)\n• Lean proteins (chicken, fish, dal, paneer)\n• Healthy fats (nuts, olive oil, avocado)\n• Low-sugar fruits (berries, apple, guava)\n\n**Foods to Limit:**\n• White rice, maida, refined flour\n• Sugary drinks and sweets\n• Fried foods\n• Processed snacks\n\nWould you like a sample meal plan?',
  'exercise': 'Recommended exercise routine for diabetes:\n\n**Daily Activities (30-45 minutes):**\n• Brisk walking\n• Yoga (especially pranayama)\n• Swimming\n• Cycling\n\n**Benefits:**\n• Improves insulin sensitivity\n• Lowers blood sugar\n• Aids weight management\n• Reduces stress\n\n**Best Time:** 30 minutes after meals\n\n**Important:** Check glucose before and after exercise. Start slowly and gradually increase intensity.',
  'symptoms': 'Common diabetes symptoms to watch for:\n\n**Warning Signs:**\n• Excessive thirst and urination\n• Unexplained weight loss\n• Fatigue and weakness\n• Blurred vision\n• Slow-healing wounds\n• Tingling in hands/feet\n\n**Emergency Symptoms:**\n• Severe hypoglycemia (glucose < 70 mg/dL)\n• Extreme hyperglycemia (glucose > 300 mg/dL)\n• Confusion or unconsciousness\n\nIf you experience emergency symptoms, seek immediate medical attention!',
  'medication': 'Medication reminders and tips:\n\n**Important Guidelines:**\n• Take medications at the same time daily\n• Don\'t skip doses\n• Store insulin properly (refrigerated)\n• Check expiry dates\n• Monitor for side effects\n\n**Common Medications:**\n• Metformin: Take with meals\n• Insulin: Rotate injection sites\n• Sulfonylureas: Take before meals\n\nAlways consult your doctor before changing medication schedules.',
  'food': 'Indian diabetic-friendly foods:\n\n**Breakfast:**\n• Oats upma with vegetables\n• Moong dal cheela\n• Vegetable poha (brown rice)\n\n**Lunch/Dinner:**\n• Brown rice with dal\n• Roti with sabzi\n• Grilled fish/chicken\n• Mixed vegetable curry\n\n**Snacks:**\n• Roasted chana\n• Cucumber/carrot sticks\n• Buttermilk\n• Handful of nuts\n\nPortion control is key!',
};

// System prompt for OpenRouter
const SYSTEM_PROMPT = `You are an AI Health Consultant specializing in diabetes management for Indian patients. 
You provide evidence-based advice on:
- Blood glucose monitoring and management
- Indian diabetic diet plans
- Exercise and lifestyle modifications
- Medication adherence
- Symptom recognition

Always:
- Be empathetic and supportive
- Provide practical, actionable advice
- Consider Indian dietary preferences
- Recommend consulting a doctor for serious concerns
- Use simple, easy-to-understand language

Never:
- Diagnose conditions
- Prescribe specific medications
- Replace professional medical advice
- Make guarantees about treatment outcomes`;

export async function getAIResponse(userMessage: string): Promise<string> {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  // Check for pre-configured responses first
  for (const [keyword, response] of Object.entries(PRE_CONFIGURED_RESPONSES)) {
    if (lowerMessage.includes(keyword)) {
      return response;
    }
  }
  
  // If OpenRouter API key is not configured, return a helpful message
  if (!OPENROUTER_API_KEY || OPENROUTER_API_KEY === 'your-openrouter-api-key-here') {
    return `I understand you're asking about "${userMessage}". 

To get personalized AI responses, please configure your OpenRouter API key in the .env.local file.

In the meantime, try asking about:
• "glucose" - Blood sugar management
• "diet" - Diabetic diet recommendations
• "exercise" - Exercise routines
• "symptoms" - Warning signs to watch
• "medication" - Medication tips
• "food" - Indian diabetic-friendly foods

How else can I help you today?`;
  }
  
  // Call OpenRouter API
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4008',
        'X-Title': 'Diabetes Management System',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please try again.';
  } catch (error) {
    console.error('AI Consultant Error:', error);
    return 'I\'m having trouble connecting right now. Please try one of these topics: glucose, diet, exercise, symptoms, medication, or food.';
  }
}

// Quick response suggestions
export const QUICK_RESPONSES = [
  { label: 'Blood Sugar Tips', value: 'How can I manage my blood glucose levels?' },
  { label: 'Diet Plan', value: 'What should I eat for diabetes?' },
  { label: 'Exercise Routine', value: 'What exercises are good for diabetes?' },
  { label: 'Symptoms', value: 'What symptoms should I watch for?' },
  { label: 'Indian Foods', value: 'What Indian foods are diabetic-friendly?' },
  { label: 'Medication Tips', value: 'How should I take my diabetes medication?' },
];
