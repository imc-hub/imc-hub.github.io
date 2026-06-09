export interface Question {
  id: number;
  category: string;
  text: string;
  options: { label: string; value: number }[];
}

export const categories = [
  { key: "business_acumen", label: "Business Acumen", color: "text-imc-teal" },
  { key: "communication", label: "Communication", color: "text-imc-gold" },
  { key: "teamwork", label: "Teamwork & Collaboration", color: "text-emerald-500" },
  { key: "problem_solving", label: "Problem Solving", color: "text-sky-500" },
  { key: "leadership", label: "Leadership & Initiative", color: "text-violet-500" },
] as const;

export const questions: Question[] = [
  // ── Business Acumen (4 questions) ──
  {
    id: 1,
    category: "business_acumen",
    text: "A company's revenue increased by 20% while costs increased by 30%. What happened to profit?",
    options: [
      { label: "Profit increased", value: 0 },
      { label: "Profit decreased", value: 3 },
      { label: "Profit stayed the same", value: 0 },
      { label: "Cannot determine without exact numbers", value: 1 },
    ],
  },
  {
    id: 2,
    category: "business_acumen",
    text: "What does P&L stand for in a business context?",
    options: [
      { label: "Profit & Loss", value: 3 },
      { label: "Plan & Launch", value: 0 },
      { label: "Price & Logistics", value: 0 },
      { label: "People & Leadership", value: 1 },
    ],
  },
  {
    id: 3,
    category: "business_acumen",
    text: "If a product costs 100 EGP to make and you want a 40% profit margin, what should the selling price be?",
    options: [
      { label: "140 EGP", value: 1 },
      { label: "167 EGP", value: 3 },
      { label: "160 EGP", value: 0 },
      { label: "125 EGP", value: 0 },
    ],
  },
  {
    id: 4,
    category: "business_acumen",
    text: "What is the primary purpose of a SWOT analysis?",
    options: [
      { label: "To calculate quarterly revenue", value: 0 },
      { label: "To evaluate Strengths, Weaknesses, Opportunities, and Threats", value: 3 },
      { label: "To schedule team meetings", value: 0 },
      { label: "To track employee attendance", value: 1 },
    ],
  },

  // ── Communication (4 questions) ──
  {
    id: 5,
    category: "communication",
    text: "You need to present a project update to senior management. What is the best approach?",
    options: [
      { label: "Share every detail to show thoroughness", value: 0 },
      { label: "Lead with key outcomes, then provide supporting details if asked", value: 3 },
      { label: "Let someone else present for you", value: 0 },
      { label: "Send an email instead of presenting", value: 1 },
    ],
  },
  {
    id: 6,
    category: "communication",
    text: "A colleague misunderstands your email and takes the wrong action. What do you do first?",
    options: [
      { label: "Report them to your manager", value: 0 },
      { label: "Clarify the misunderstanding and discuss how to prevent it next time", value: 3 },
      { label: "Send a follow-up email correcting them", value: 1 },
      { label: "Ignore it — they should have read more carefully", value: 0 },
    ],
  },
  {
    id: 7,
    category: "communication",
    text: "Which of the following is the most effective way to give constructive feedback?",
    options: [
      { label: "Point out what went wrong and let them figure out the fix", value: 1 },
      { label: "Describe the specific behavior, its impact, and suggest an improvement", value: 3 },
      { label: "Only give positive feedback to avoid conflict", value: 0 },
      { label: "Wait for the annual review to mention it", value: 0 },
    ],
  },
  {
    id: 8,
    category: "communication",
    text: "During a meeting, a stakeholder keeps going off-topic. What is the most professional response?",
    options: [
      { label: "Interrupt and tell them to stay on topic", value: 0 },
      { label: "Let them finish, then redirect: \"That's a great point — let's park that for now and return to the agenda\"", value: 3 },
      { label: "Stay silent and let the meeting run over", value: 0 },
      { label: "Send a passive-aggressive chat message", value: 0 },
    ],
  },

  // ── Teamwork & Collaboration (4 questions) ──
  {
    id: 9,
    category: "teamwork",
    text: "A team member consistently misses deadlines, affecting the whole project. What do you do?",
    options: [
      { label: "Do their work for them to stay on track", value: 0 },
      { label: "Talk to them privately to understand the issue and find a solution together", value: 3 },
      { label: "Complain to other team members", value: 0 },
      { label: "Immediately escalate to management", value: 1 },
    ],
  },
  {
    id: 10,
    category: "teamwork",
    text: "Two team members have a disagreement about the project direction. What is the best approach?",
    options: [
      { label: "Let the more senior person decide", value: 1 },
      { label: "Facilitate a discussion where both present their reasoning and find common ground", value: 3 },
      { label: "Pick the option you personally prefer", value: 0 },
      { label: "Split the team and try both approaches", value: 0 },
    ],
  },
  {
    id: 11,
    category: "teamwork",
    text: "You notice a new team member is struggling but hasn't asked for help. What do you do?",
    options: [
      { label: "Wait for them to ask — they'll figure it out", value: 0 },
      { label: "Offer support: \"I noticed you might be finding X challenging — want to walk through it together?\"", value: 3 },
      { label: "Tell their manager they're underperforming", value: 0 },
      { label: "Take over their tasks to keep things moving", value: 1 },
    ],
  },
  {
    id: 12,
    category: "teamwork",
    text: "What is the most important factor for a high-performing team?",
    options: [
      { label: "Everyone has the same skill set", value: 0 },
      { label: "Psychological safety — team members feel safe to speak up and take risks", value: 3 },
      { label: "Having the most experienced leader", value: 1 },
      { label: "Working in the same physical location", value: 0 },
    ],
  },

  // ── Problem Solving (4 questions) ──
  {
    id: 13,
    category: "problem_solving",
    text: "A key supplier suddenly increases prices by 40%. What is the first step you should take?",
    options: [
      { label: "Accept the increase — you have no choice", value: 0 },
      { label: "Immediately switch to a cheaper supplier", value: 1 },
      { label: "Analyze the impact, understand their reasoning, and explore alternatives before deciding", value: 3 },
      { label: "Reduce product quality to maintain margins", value: 0 },
    ],
  },
  {
    id: 14,
    category: "problem_solving",
    text: "You're given a vague problem: \"Sales are down.\" What do you do first?",
    options: [
      { label: "Launch a promotion immediately", value: 0 },
      { label: "Break it down: Which products? Which regions? Compared to what period? What changed?", value: 3 },
      { label: "Ask the team to work harder", value: 0 },
      { label: "Wait to see if it improves next month", value: 0 },
    ],
  },
  {
    id: 15,
    category: "problem_solving",
    text: "Which framework is commonly used for root cause analysis?",
    options: [
      { label: "The 5 Whys", value: 3 },
      { label: "The 4 Ps of Marketing", value: 0 },
      { label: "The 7 Habits", value: 1 },
      { label: "The Rule of 72", value: 0 },
    ],
  },
  {
    id: 16,
    category: "problem_solving",
    text: "You have three urgent tasks due today but can only complete two. What is the best approach?",
    options: [
      { label: "Work overtime to finish all three", value: 1 },
      { label: "Assess impact, communicate proactively about the delay on the lowest-priority task, and deliver the other two well", value: 3 },
      { label: "Rush through all three and submit them partially done", value: 0 },
      { label: "Only do the two easiest ones", value: 0 },
    ],
  },

  // ── Leadership & Initiative (4 questions) ──
  {
    id: 17,
    category: "leadership",
    text: "You see a process at work that is inefficient but outside your direct responsibility. What do you do?",
    options: [
      { label: "Ignore it — it's not your job", value: 0 },
      { label: "Complain to colleagues about it", value: 0 },
      { label: "Document the issue with a proposed improvement and share it with the relevant team", value: 3 },
      { label: "Fix it yourself without telling anyone", value: 1 },
    ],
  },
  {
    id: 18,
    category: "leadership",
    text: "What is the difference between a manager and a leader?",
    options: [
      { label: "There is no difference", value: 0 },
      { label: "A manager focuses on tasks and processes; a leader inspires and aligns people toward a vision", value: 3 },
      { label: "A manager is higher in the hierarchy", value: 0 },
      { label: "A leader is always the CEO", value: 0 },
    ],
  },
  {
    id: 19,
    category: "leadership",
    text: "Your team is demoralized after a project failure. What is the most effective first step?",
    options: [
      { label: "Assign a new project immediately to move on", value: 0 },
      { label: "Acknowledge the failure, facilitate a blameless retrospective, and identify lessons learned", value: 3 },
      { label: "Praise the team without addressing what went wrong", value: 1 },
      { label: "Replace underperforming team members", value: 0 },
    ],
  },
  {
    id: 20,
    category: "leadership",
    text: "Which best describes a growth mindset in a corporate setting?",
    options: [
      { label: "Only taking on tasks you know you can do well", value: 0 },
      { label: "Believing abilities can be developed through effort, learning, and feedback", value: 3 },
      { label: "Focusing exclusively on your strengths", value: 1 },
      { label: "Avoiding challenges to maintain a perfect record", value: 0 },
    ],
  },
];

export const maxScore = questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.value)), 0);

export function calculateScore(answers: Record<number, number>): {
  total: number;
  max: number;
  percentage: number;
  categories: { key: string; label: string; score: number; max: number; percentage: number; color: string }[];
} {
  let total = 0;
  const categoryMap: Record<string, { score: number; max: number }> = {};

  for (const q of questions) {
    const selectedIdx = answers[q.id];
    const answerValue = selectedIdx !== undefined ? q.options[selectedIdx].value : 0;
    total += answerValue;
    if (!categoryMap[q.category]) categoryMap[q.category] = { score: 0, max: 0 };
    categoryMap[q.category].score += answerValue;
    categoryMap[q.category].max += Math.max(...q.options.map(o => o.value));
  }

  const categoryResults = categories.map((cat) => {
    const data = categoryMap[cat.key] || { score: 0, max: 0 };
    return {
      key: cat.key,
      label: cat.label,
      score: data.score,
      max: data.max,
      percentage: data.max > 0 ? Math.round((data.score / data.max) * 100) : 0,
      color: cat.color,
    };
  });

  return {
    total,
    max: maxScore,
    percentage: Math.round((total / maxScore) * 100),
    categories: categoryResults,
  };
}

export function getReadinessLevel(percentage: number): {
  level: string;
  description: string;
  recommendation: string;
} {
  if (percentage >= 85) {
    return {
      level: "Corporate Ready",
      description: "Excellent! You demonstrate strong corporate readiness across key areas.",
      recommendation: "You're well-prepared. Consider our Corporate Simulator to sharpen your skills further or OCTRI to build mental resilience.",
    };
  }
  if (percentage >= 65) {
    return {
      level: "Developing",
      description: "Good foundation with room for growth in specific areas.",
      recommendation: "Our IMC Academy courses can help you close the gaps. Check out our plans below.",
    };
  }
  if (percentage >= 40) {
    return {
      level: "Emerging",
      description: "You have potential but need structured development in several areas.",
      recommendation: "We recommend starting with IMC Academy's structured learning paths to build your corporate readiness.",
    };
  }
  return {
    level: "Getting Started",
    description: "You're at the beginning of your corporate readiness journey.",
    recommendation: "Start with our free IMC Academy assessment track to identify your strengths and build a personalized learning path.",
  };
}
