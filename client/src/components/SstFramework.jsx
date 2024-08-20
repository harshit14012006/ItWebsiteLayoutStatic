import React from 'react';
import vscode from '../images/vscode.jpg';
import reactlogo from '../images/reactlogo.jpg';
import nodejslogo from '../images/nodejslogo.jpg';
import bootstraplogo from '../images/bootstraplogo.jpg'
import mvclogo from '../images/mvclogo.png'
import expresslogo from '../images/expresslogo.webp'
const frameworks = [
  { src: vscode, alt: "VS Code", title: "Microsoft Visual Studio", desc: "Supports almost every major programming language with extensions available." },
  { src: mvclogo, alt: "mvc", title: "MVC", desc: "The model layer is responsible for the application's data logic and storing and retrieving data from back-end data stores. " },
  { src: bootstraplogo, alt: "HTML", title: "Bootstrap", desc: "Get started with Bootstrap, the world’s most popular framework for buislding responsive, mobile-first sites, with jsDelivr and a template starter page." },
  { src: reactlogo, alt: "React Js", title: "React Js", desc: "A JavaScript library for building UI components, efficiently updating only what needs to be changed." },
  { src: expresslogo, alt: "express", title: "Express Js", desc: "In this first Express article we answer the questions Opinionated frameworks are those with opinions about the right way to handle any particular task." },
  { src: nodejslogo, alt: "Node.js", title: "Node.js", desc: "An open-source JavaScript runtime that allows for fast and scalable server-side applications." }
];

function SstFramework() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-100 to-yellow-100 dark:from-gray-700 dark:to-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 dark:text-white">
          Frameworks We Use
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((item, index) => (
            <div key={index} className="flex items-start p-4 space-x-4 transition-transform border rounded-lg shadow-lg hover:scale-105">
              <img src={item.src} alt={item.alt} className="w-16 h-16 transition-transform transform border-2 border-gray-300 rounded-full dark:border-gray-600 hover:scale-110" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SstFramework;
