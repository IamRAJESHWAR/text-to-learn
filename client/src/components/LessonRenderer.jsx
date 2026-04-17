import React from 'react';
import HeadingBlock from './blocks/HeadingBlock';
import ParagraphBlock from './blocks/ParagraphBlock';
import CodeBlock from './blocks/CodeBlock';
import VideoBlock from './blocks/VideoBlock';
import MCQBlock from './blocks/MCQBlock';

const LessonRenderer = ({ content }) => {
  return (
    <div>
      {content.map((block, idx) => {
        switch (block.type) {
          case 'heading':
            return <HeadingBlock key={idx} text={block.text} />;
          case 'paragraph':
            return <ParagraphBlock key={idx} text={block.text} />;
          case 'code':
            return <CodeBlock key={idx} language={block.language} text={block.text} />;
          case 'video':
            return <VideoBlock key={idx} query={block.query} />;
          case 'mcq':
            return <MCQBlock key={idx} question={block.question} options={block.options} answer={block.answer} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default LessonRenderer;
