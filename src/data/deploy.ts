const data = [
  {
    title: "Deploy in github",
    feature: "Github",
    desc: `
git init
git add .
git commit -m "first commit"
git remote set-url origin https://github.com/username/repository.git
git remote add origin git@github.com:laca8/new.git
git push -u origin main       
        `,
  },
  {
    title: "Deploy in vercel client/vercel.json",
    feature: "Vercel ",
    desc: `
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/"
        }
    ]
}      
        `,
  },
  {
    title: "Deploy in vercel backend/vercel.json",
    feature: "Vercel ",
    desc: `
{
    "builds": [
        {
            "src": "index.js",
            "use": "@vercel/node",
            "config": {
                "maxLambdaSize": "50mb",
                "memory": 3008,
                "maxDuration": 60
            }
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "index.js"
        }
    ]
} 
        `,
  },
  {
    title: "Package.json",
    feature: "Edit package.json",
    desc: `
"scripts": {
    "build": "node --max-old-space-size=3072 npm i && cd backend && npm install",
    "server": "npm run start --prefix backend",
    "client": "npm run dev --prefix  client",
    
  },
        `,
  },

  {
    title: "Depoly on Netlify",
    feature: "Netlify client/netlify.toml",
    desc: `
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
        `,
  },
];
export default data;
