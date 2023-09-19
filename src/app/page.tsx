"use client"

import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {

    const [inputValue, setInputValue] = useState("");
    const {push} = useRouter();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        push(`/information/${inputValue}`);
    }

  return (
    <div>
        <div>
            <h1>Enter Your Name</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="Type a name here ..."
                   className="text-black"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
