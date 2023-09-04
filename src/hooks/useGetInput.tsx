'use client'

import React from "react";

interface Input {
  key: string;
  value: string;
}

export function useGetInput() {
  const inputs = React.useRef({});

  function handleGetInput({key, value}:Input) {
    inputs.current = {...inputs.current, [key]: value};
    
  }

  return {
    inputs,
    handleGetInput
  }
}