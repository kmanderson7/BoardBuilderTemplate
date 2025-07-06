// BoardBriefingBuilder.jsx
import React, { useEffect, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Collaboration from '@tiptap/extension-collaboration';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

const BoardBriefingBuilder = () => {
  const [docId] = useState('default-board-brief'); // You can customize this for per-user/per-session documents

  const ydoc = new Y.Doc();
  const provider = new WebrtcProvider(docId, ydoc);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: ydoc,
      }),
    ],
    content: '<h1>Board Briefing</h1><p>Start collaborating...</p>',
  });

  useEffect(() => {
    return () => {
      provider.destroy();
    };
  }, [provider]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📝 Collaborative Board Brief</h2>
      <EditorContent editor={editor} className="border rounded bg-white p-4 shadow-md" />
    </div>
  );
};

export default BoardBriefingBuilder;
