
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Cpu, 
  Database, 
  Award as AwardIcon, 
  BookOpen, 
  Trophy,
  Activity
} from 'lucide-react';
import { Project, Experience, Publication, Award, SkillCategory } from './types';

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/MizanMustakim' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/md-mizanur-rahman-mustakim/' },
  { name: 'Email', icon: <Mail size={20} />, url: 'mailto:mustakim.mizan@gmail.com' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp1',
    role: 'Graduate Research Assistant',
    organization: 'School of Computer Science and Technology, Beijing Institute of Technology, Beijing, China',
    period: 'Sep 2023 - July 2025',
    description: [
      'Developed and applied dental radiographic image processing solutions in collaboration with a major dental hospital in China.',
      'Led and supported senior undergraduate students through technical mentorship and project guidance.',
      'Earned multiple awards through competitive participation in national-level technical and innovation contests.'
    ]
  },
  {
    id: 'exp2',
    role: 'Research Assistant (Part-time)',
    organization: 'School of Information and Electronics, Beijing Institute of Technology, Beijing, China',
    period: 'Nov 2020 - Dec 2021',
    description: [
      'Debugged and optimized simulation pipelines and developed, trained, and evaluated machine learning models on simulated laboratory datasets.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Teeth Segmentation',
    description: [
      'A dual-stream deep learning model to enhance feature representation and downstream segmentation accuracy.',
      'Integrated Kolmogorov–Arnold Network–based modules to improve segmentation precision and model robustness.',
      'Optimized for high-precision analysis of 2D X-ray images.'
    ],
    tags: ['PyTorch', 'OpenCV', "Scikit-learn", 'Deep Learning'],
    images: [
      'https://res.cloudinary.com/ddbdyb6go/video/upload/v1770399601/teeth_khhqmh.mp4',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770400012/teeth_challenge_hh25th.jpg',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770400131/de-kan_hx7xgl.jpg',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770400505/de-kan_result_znusgd.jpg',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770400766/de-kan_quan_orlhqn.jpg',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770400766/de-kan_quan2_pg297p.jpg'
    ],
    award: 'Postgraduate Thesis'
  },
  {
    id: 'p2',
    title: 'Automated Bone Age Prediction',
    description: [
      'Built a robust clinical decision support system.',
      'Automated pediatric bone age estimation using hand radiographs.',
      'Achieved state-of-the-art accuracy in clinical validation tests.'
    ],
    tags: ["OpenCV", "PyTorch", "Scikit-learn", 'Deep Learning'],
    images: [
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770398223/bone_background_cyarux.jpg',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770398356/bone_data_process_dvorhw.jpg',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770398479/bone_data_process_result_om3b0r.jpg',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770398582/bone_model_ahwfnh.jpg'
    ],
    award: '1st Prize, 2023 Shanghai Lingang Cup Artificial Intelligence Global Innovation Competition'
  },
  {
    id: 'p3',
    title: 'Hallucination Detection in ChatGPT 3.5',
    description: [
      'Developed a Knowledge Distillation framework using BERT.',
      'Designed to detect factual inconsistencies in ChatGPT responses.',
      'Improved model reliability for automated text generation tasks.'
    ],
    tags: ['Tensorflow' , 'Pandas', 'Scikit-learn', 'BERT', 'LLM'],
    images: [
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770397399/prb_elkbpu.jpg',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770397399/hallu_model_arc_1_kge2zh.jpg',
      'https://res.cloudinary.com/ddbdyb6go/image/upload/v1770397399/hallu_model_arc_2_uuw4tg.jpg'
    ],
    award: '2nd Prize, 2023 Shanghai Lingang Cup Artificial Intelligence Global Innovation Competition'
  },
  {
    id: 'p4',
    title: 'Road Damage Detection',
    description: [
      'Built an end-to-end YOLOv7-based damage detection system.',
      'Implemented advanced image augmentation and real-time inference pipelines.',
      'Secured 2nd prize in Beijing Challenge Cup 2023.'
    ],
    tags: ['YOLOv7', 'Computer Vision', 'Real-time Inference', 'Python'],
    images: [
      'https://res.cloudinary.com/ddbdyb6go/video/upload/v1770401253/model_result_demo_lnkn4a.mp4'
    ],
    award: 'Bachelor Thesis'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    title: 'A survey on intrusion detection system in IoT networks',
    authors: 'Md Mahbubur Rahman, Shaharia Al Shakil, Md Mizanur Rahman Mustakim',
    journal: 'Cyber Security and Applications',
    year: '2025',
    link: 'https://doi.org/10.1016/j.csa.2024.100082'
  },
  {
    id: 'pub2',
    title: 'Feature-Scale Attentive Pseudo-Labeling for Semi-Supervised Wafer Map Defect Segmentation',
    authors: 'Mohammad Mehedi Hasan, Naigong Yu, Imran Khan Mirani, Md Mizanur Rahman Mustakim',
    journal: '2025 10th International Conference on Signal and Image Processing (ICSIP)',
    year: '2025',
    link: 'https://doi.org/10.1109/ICSIP65915.2025.11171457'
  },
  {
    id: 'pub3',
    title: 'DE-KAN: A Kolmogorov Arnold Network with Dual Encoders for accurate 2D Teeth Segmentation',
    authors: 'M. R. Mustakim, et al.',
    journal: 'Submitted / Under Review',
    year: '2024',
    status: 'In Review'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Python', 'C', 'MySQL']
  },
  {
    title: 'Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Keras', 'matplotlib', 'tkinter', 'Scikit-learn', 'Pandas', 'NumPy']
  },
  {
    title: 'Tools',
    skills: ['MS Office', 'GitHub', 'Latex', 'VSCode', 'Anaconda']
  }
];

export const AWARDS: Award[] = [
  {
    id: 'a1',
    title: 'Honor Graduate Award 2025',
    issuer: 'Beijing Institute of Technology, Beijing, China.',
    year: 'June 2025',
    description: ['Awarded based on the final academic performance in the postgraduate degree.'],
    type: 'honor'
  },
  {
    id: 'a2',
    title: 'CSC Scholarship (Type B)',
    issuer: 'China Scholarship Council',
    year: 'Sep 2023 - July 2025',
    description: [''],
    type: 'scholarship'
  },
  {
    id: 'a3',
    title: '1st Prize - Shanghai Lingang Cup Artificial Intelligence Global Innovation Competition',
    issuer: 'Haier Technology / Fudan University',
    year: 'Dec 2023',
    description: ['Role: Team Leader', 
                  'Task: Human bone age prediction using deep learning.'],
    type: 'gold'
  },
  {
    id: 'a4',
    title: '2nd Prize - Shanghai Lingang Cup Artificial Intelligence Global Innovation Competition',
    issuer: 'Weibo / Fudan University',
    year: 'Dec 2023',
    description: ['Role: Team Leader', 
                  'Task: Hallucination Detection of ChatGPT 3.5.'],
    type: 'silver'
  },
  {
    id: 'a5',
    title: 'Honor Graduate Award 2023',
    issuer: 'Beijing Institute of Technology',
    year: 'June 2023',
    description: ['Awarded based on the final academic performance in the undergraduate degree.'],
    type: 'honor'
  },
  {
    id: 'a6',
    title: 'Silver Award - Beijing Challenge Cup 2023',
    issuer: '"Qingchuang Beijing" Idea Competition',
    year: 'April 2023',
    description: ['Role: Team Leader', 
                  'Proposed Idea: Building Application for Detection of Damaged Road by using Deep Learning.'],
    type: 'silver'
  },
  {
    id: 'a7',
    title: '1st Prize - Beijing Municipal Government Scholarship',
    issuer: 'Beijing Municipal Government',
    year: '2021 - 2023',
    description: ['Covered full tuition fee for academic years 2020-2021 and 2021-2022.'],
    type: 'scholarship'
  },
  {
    id: 'a8',
    title: 'Excellent Student Award',
    issuer: 'Beijing Institute of Technology',
    year: 'Dec 2022',
    description: ['Awarded based on the performance of academic year 2021-2022.'],
    type: 'honor'
  },
  {
    id: 'a9',
    title: 'National Debate Champion',
    issuer: 'National Level Competitions',
    year: '2015 - 2018',
    description: ['Independence Day [2nd] Inter Club Debate Competition-2018, University of Rajshahi', 
                  'Prothom Alo - RDS 6th National Debate Festival 2015, Dhaka Residential Model College. (Inter College)', 
                  'Eden Mohila College National Debate Festival 2015. (Inter College)'],
    type: 'gold'
  }
];
