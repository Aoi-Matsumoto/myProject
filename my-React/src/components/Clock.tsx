import React, { useState, useEffect } from "react";

const Update_Cycle = 1000;

const Key_Locale = "KEY_LOCALE";

enum Locale {
  US = "en-US",
  JP = "ja-JP",
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  useEffect(() => {
    setInterval(() => {
      setTimestamp(new Date());
    }, Update_Cycle);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  useEffect(() => {
    const savedLocale = localStorage.getItem("KEY_LOCALE");
    if (savedLocale) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(Key_Locale, locale);
  }, [locale]);

  return (
    <div style={{ backgroundColor: "#da70d6" }}>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  );
};
