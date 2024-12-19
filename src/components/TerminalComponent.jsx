import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { io } from 'socket.io-client';
//import 'xterm/css/xterm.css';

const socket = io('http://localhost:3001');

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const term = useRef(null);

  useEffect(() => {
    term.current = new Terminal();
    term.current.open(terminalRef.current);

    term.current.writeln('Welcome to the React Terminal image stenography');
    term.current.onData(e => {
      handleCommand(e);
    });

    socket.on('output', data => {
      term.current.writeln(data);
    });
  }, []);

  const handleCommand = (command) => {
    socket.emit('command', command);
  };

  return <div ref={terminalRef} className="w-full h-full text-black" />;
};

export default TerminalComponent;
