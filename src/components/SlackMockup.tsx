import {
  slackChannels,
  slackTeammates,
  slackAiTeammates,
  slackMessages,
} from "@/data/shared";

export default function SlackMockup() {
  return (
    <div className="rounded-[8px] overflow-hidden border border-[#e0dce4] shadow-[0_4px_24px_rgba(49,38,59,0.10)]">
      {/* Title bar — macOS style */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#350d36] border-b border-[#522653]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[12px] text-[#e8d5e8] font-body">Acme Agency</span>
      </div>

      {/* Body: sidebar + chat */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] min-h-[380px]">
        {/* Sidebar — Slack purple */}
        <div className="hidden md:flex flex-col bg-[#3F0E40] px-0 py-0">
          {/* Workspace header */}
          <div className="px-4 py-3 border-b border-[#522653]">
            <div className="font-body font-bold text-[15px] text-white flex items-center justify-between">
              Acme Agency
              <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded-full text-[10px] text-white/70">+</span>
            </div>
          </div>

          <div className="px-3 py-3 flex-1 overflow-hidden">
            {/* Channels */}
            <div className="mb-4">
              <div className="text-[12px] font-body text-[#cfa7cf] px-1 mb-1.5">
                Channels
              </div>
              {slackChannels.map((ch) => (
                <div
                  key={ch}
                  className={`text-[13px] py-1 px-2 rounded-[4px] flex items-center gap-1.5 ${
                    ch === "campaign-updates"
                      ? "bg-[#1164A3] text-white font-body"
                      : "text-[#cfa7cf] font-body hover:bg-white/5"
                  }`}
                >
                  <span className="text-[12px] opacity-70">#</span> {ch}
                </div>
              ))}
            </div>

            {/* Direct Messages — Teammates */}
            <div className="mb-4">
              <div className="text-[12px] font-body text-[#cfa7cf] px-1 mb-1.5">
                Direct Messages
              </div>
              {slackTeammates.map((t) => (
                <div
                  key={t.name}
                  className="text-[13px] text-[#cfa7cf] font-body py-1 px-2 rounded-[4px] flex items-center gap-2 hover:bg-white/5"
                >
                  <span className="relative flex-shrink-0">
                    <span className="w-5 h-5 rounded-[4px] bg-[#6b4c6e] flex items-center justify-center text-[10px] text-white font-bold">
                      {t.name[0]}
                    </span>
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-[#3F0E40] ${
                        t.online ? "bg-[#2BAC76]" : "bg-[#6b6b7f]"
                      }`}
                    />
                  </span>
                  <span className="truncate">{t.name}</span>
                </div>
              ))}
            </div>

            {/* AI Teammates */}
            <div>
              <div className="text-[12px] font-body text-[#cfa7cf] px-1 mb-1.5">
                AI Teammates
              </div>
              {slackAiTeammates.map((t) => (
                <div
                  key={t.name}
                  className="text-[13px] text-[#cfa7cf] font-body py-1 px-2 rounded-[4px] flex items-center gap-2 hover:bg-white/5"
                >
                  <span className="relative flex-shrink-0">
                    <span className="w-5 h-5 rounded-[4px] bg-[#2BAC76] flex items-center justify-center text-[10px] text-white font-bold">
                      {t.name[0]}
                    </span>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-[#3F0E40] bg-[#2BAC76]" />
                  </span>
                  <span className="truncate">{t.name}</span>
                  <span className="ml-auto text-[8px] font-mono font-semibold bg-[#2BAC76]/20 text-[#2BAC76] px-1 py-0.5 rounded-[2px] leading-none">
                    AI
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat area — white background */}
        <div className="flex flex-col bg-white">
          {/* Chat header */}
          <div className="px-5 py-3 border-b border-[#e8e8e8] flex items-center gap-2">
            <span className="text-[#616061] text-[14px]">#</span>
            <span className="font-body font-bold text-[15px] text-[#1d1c1d]">
              campaign-updates
            </span>
            <span className="text-[12px] text-[#616061] ml-2 hidden sm:inline">
              Campaign performance and updates
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 flex flex-col gap-0 px-5 py-3 overflow-y-auto">
            {slackMessages.map((msg, i) => (
              <div
                key={i}
                className="flex gap-2.5 py-2 hover:bg-[#f8f8f8] -mx-5 px-5 group"
              >
                <div
                  className="w-9 h-9 rounded-[8px] flex-shrink-0 flex items-center justify-center text-[14px] font-bold text-white mt-0.5"
                  style={{ background: msg.avatar.color }}
                >
                  {msg.avatar.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-body font-bold text-[15px] text-[#1d1c1d]">
                      {msg.name}
                    </span>
                    {msg.isAi && (
                      <span className="text-[9px] font-mono font-semibold bg-[#2BAC76]/10 text-[#2BAC76] px-1.5 py-0.5 rounded-[3px] leading-none relative -top-[1px]">
                        AI &middot; {msg.aiRole}
                      </span>
                    )}
                    <span className="text-[12px] text-[#616061]">
                      {msg.time}
                    </span>
                  </div>
                  <p className="text-[15px] text-[#1d1c1d] leading-[1.46] font-body">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div className="px-5 py-3">
            <div className="border border-[#c8c8c8] rounded-[8px] px-4 py-2.5 flex items-center gap-2">
              <span className="text-[14px] text-[#8d8d8d] font-body">
                Message #campaign-updates
              </span>
              <div className="ml-auto flex items-center gap-2.5 text-[#8d8d8d]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
