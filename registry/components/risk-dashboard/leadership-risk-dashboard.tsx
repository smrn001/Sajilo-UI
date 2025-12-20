'use client';

import React, { useMemo } from 'react';
import { CheckSquare, Link2, ShieldAlert, Shield } from 'lucide-react';

interface RiskDriver {
  title: string;
  description: string;
  icon: any;
}

interface RiskHotspot {
  id: number;
  position: { left: string; top: string };
  visual: { type: string; colorClass: string };
  bubblePosition: string;
  riskName: string;
  likelihood: string;
  impact: string;
  impactClass: string;
  status: string;
  owner: string;
}

const LeadershipRiskDashboard = () => {
  // Mock data for top risk drivers
  const topRiskDrivers: RiskDriver[] = useMemo(() => {
    return [
      {
        title: 'Compliance & Regulatory Exposure',
        description: 'Stricter audits; potential fines. Driver: Evolving regulations.',
        icon: CheckSquare,
      },
      {
        title: 'Supply Chain Dependencies',
        description: 'Vendor reliance; revenue risk. Driver: Concentrated suppliers.',
        icon: Link2,
      },
      {
        title: 'Operational Resilience Gaps',
        description: 'Monitoring gaps; uptime risk. Driver: Limited oversight.',
        icon: ShieldAlert,
      },
    ];
  }, []);

  // Mock data for risk hotspots
  const riskHotspots: RiskHotspot[] = useMemo(() => {
    return [
      {
        id: 1,
        position: { left: '37.5%', top: '18.75%' },
        visual: { type: 'vis--ring', colorClass: 'vis--orange' },
        bubblePosition: 'bubble-right',
        riskName: 'Supply Chain Dependencies',
        likelihood: 'Medium',
        impact: 'High',
        impactClass: 'hi',
        status: 'Vendor/API exposures, 3rd-party reliance risks',
        owner: 'Vendor Risk Management',
      },
      {
        id: 2,
        position: { left: '87.5%', top: '18.75%' },
        visual: { type: 'vis--ring', colorClass: 'vis--white' },
        bubblePosition: 'bubble-left',
        riskName: 'Application Security Lag',
        likelihood: 'High',
        impact: 'Critical',
        impactClass: 'danger',
        status: '6 open vulnerabilities',
        owner: 'Security Engineering',
      },
      {
        id: 3,
        position: { left: '87.5%', top: '56.25%' },
        visual: { type: 'vis--dot', colorClass: 'vis--yellow' },
        bubblePosition: 'bubble-left',
        riskName: 'Human Error & Culture',
        likelihood: 'High',
        impact: 'Medium',
        impactClass: '',
        status: 'Ongoing phishing simulations, training gap',
        owner: 'IT Security Awareness',
      },
    ];
  }, []);

  const getAccentClass = (title: string): string => {
    if (title.includes('Application Security') || title.includes('Security Lag')) {
      return 'text-red-500';
    } else if (title.includes('Supply Chain') || title.includes('Dependencies')) {
      return 'text-orange-500';
    } else if (title.includes('Compliance') || title.includes('Regulatory')) {
      return 'text-blue-500';
    }
    return 'text-yellow-500';
  };

  const getIconComponent = (title: string) => {
    if (title.includes('Compliance') || title.includes('Regulatory')) {
      return CheckSquare;
    } else if (title.includes('Supply Chain') || title.includes('Dependencies')) {
      return Link2;
    } else if (title.includes('Operational') || title.includes('Resilience')) {
      return ShieldAlert;
    }
    return Shield;
  };

  return (
    <section
      className="min-w-[780px] bg-gradient-to-b from-[#080808] to-[#0b0b0d] p-7 flex justify-center box-border"
      aria-labelledby="lr-title"
    >
      <div className="w-full max-w-[1080px] bg-[#0f0f11] rounded-2xl p-4 md:p-5 shadow-2xl text-white flex flex-col gap-2.5">
        {/* Header */}
        <header className="flex items-center gap-2.5 mb-3.5">
          <div className="flex-1">
            <h1 id="lr-title" className="font-extrabold text-xl md:text-2xl m-0 text-white">
              Leadership Focus &amp; Risk Drivers
            </h1>
            <div className="text-gray-400 text-xs md:text-sm mt-0.5">
              Top Risks, Drivers &amp; Board Priorities — Dec 2025
            </div>
          </div>
        </header>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-1" />

        {/* Main area */}
        <div className="flex flex-col gap-5">
          {/* Heatmap Section */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg md:text-xl font-extrabold text-white m-0">
              Risk Heat Map (Likelihood × Impact)
            </h2>
            <p className="text-gray-400 text-xs md:text-sm m-0 mb-2">
              Visual distribution of top enterprise risks by probability and business impact
            </p>

            <div className="flex flex-col gap-3">
              {/* Chart Area */}
              <div className="relative w-full max-w-[420px] aspect-[3/2]">
                {/* SVG Grid */}
                <svg
                  className="w-full h-full block rounded-md shadow-inner"
                  viewBox="0 0 540 360"
                  preserveAspectRatio="xMidYMid meet"
                  role="presentation"
                  focusable="false"
                >
                  {/* 3x3 Grid */}
                  {/* Row 1 (Top - High Impact) */}
                  <rect x="0" y="0" width="180" height="120" fill="#FACC15" />
                  <rect x="180" y="0" width="180" height="120" fill="#EF4444" />
                  <rect x="360" y="0" width="180" height="120" fill="#B91C1C" />

                  {/* Row 2 (Medium Impact) */}
                  <rect x="0" y="120" width="180" height="120" fill="#4CAF50" />
                  <rect x="180" y="120" width="180" height="120" fill="#FACC15" />
                  <rect x="360" y="120" width="180" height="120" fill="#EF4444" />

                  {/* Row 3 (Bottom - Low Impact) */}
                  <rect x="0" y="240" width="180" height="120" fill="#2E7D32" />
                  <rect x="180" y="240" width="180" height="120" fill="#4CAF50" />
                  <rect x="360" y="240" width="180" height="120" fill="#F4B41A" />
                </svg>

                {/* Hotspots Overlay */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  {riskHotspots.map((hotspot) => (
                    <div
                      key={hotspot.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto group"
                      style={{ left: hotspot.position.left, top: hotspot.position.top }}
                    >
                      {/* Visual Marker */}
                      <span
                        className={`block w-[18px] h-[18px] rounded-full ${
                          hotspot.visual.type === 'vis--ring'
                            ? `bg-transparent border-[3px] ${
                                hotspot.visual.colorClass === 'vis--orange'
                                  ? 'border-orange-500'
                                  : 'border-white'
                              }`
                            : `border-2 border-white ${
                                hotspot.visual.colorClass === 'vis--yellow'
                                  ? 'bg-yellow-400'
                                  : 'bg-red-500'
                              }`
                        }`}
                        aria-hidden="true"
                      />

                      {/* Tooltip Bubble */}
                      <div
                        className={`absolute top-1/2 bg-[#0b0b0c] text-white rounded-lg p-2 md:p-2.5 min-w-[200px] max-w-[320px] -translate-y-1/2 scale-95 opacity-0 pointer-events-none shadow-2xl transition-all duration-200 z-30 whitespace-normal group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto ${
                          hotspot.bubblePosition === 'bubble-right'
                            ? 'left-[calc(100%+12px)] before:absolute before:left-[-12px] before:top-1/2 before:-translate-y-1/2 before:border-t-[10px] before:border-t-transparent before:border-b-[10px] before:border-b-transparent before:border-r-[12px] before:border-r-[#0b0b0c]'
                            : 'right-[calc(100%+12px)] before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:border-t-[10px] before:border-t-transparent before:border-b-[10px] before:border-b-transparent before:border-l-[12px] before:border-l-[#0b0b0c]'
                        }`}
                        role="group"
                        aria-label={`${hotspot.riskName} details`}
                      >
                        <div className="grid grid-cols-[90px_1fr] gap-x-2 gap-y-1.5 text-[11px] leading-tight">
                          <span className="text-gray-400 font-bold">Risk Name:</span>
                          <span className="text-white font-extrabold text-right">
                            {hotspot.riskName}
                          </span>

                          <span className="text-gray-400 font-bold">Likelihood:</span>
                          <span className="text-white font-bold text-right">
                            {hotspot.likelihood}
                          </span>

                          <span className="text-gray-400 font-bold">Impact:</span>
                          <span
                            className={`font-bold text-right ${
                              hotspot.impactClass === 'danger'
                                ? 'text-red-500'
                                : hotspot.impactClass === 'hi'
                                ? 'text-orange-500'
                                : 'text-white'
                            }`}
                          >
                            {hotspot.impact}
                          </span>

                          <span className="text-gray-400 font-bold">Status:</span>
                          <span className="text-white font-extrabold text-right">
                            {hotspot.status}
                          </span>

                          <span className="text-gray-400 font-bold">Owner:</span>
                          <span className="text-white font-extrabold text-right">
                            {hotspot.owner}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Axis Labels */}
                <div className="absolute left-[-38px] top-1/2 -translate-y-1/2 -rotate-90 text-purple-400 text-xs font-semibold pointer-events-none z-[5]">
                  Impact ↑
                </div>
                <div className="absolute left-1/2 bottom-[-28px] -translate-x-1/2 text-purple-400 text-xs font-semibold pointer-events-none z-[5]">
                  Likelihood →
                </div>
              </div>

              {/* Legend */}
              <aside className="flex flex-row gap-3 items-center mt-2" aria-label="Risk legend">
                <div className="text-gray-400 text-[0.7rem] font-bold uppercase tracking-wider mr-1.5">
                  Priority
                </div>
                <div className="flex items-center gap-1.5 text-white text-xs">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block bg-red-500" />
                  <span>Critical Priority</span>
                </div>
                <div className="flex items-center gap-1.5 text-white text-xs">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block bg-orange-500" />
                  <span>High Priority</span>
                </div>
                <div className="flex items-center gap-1.5 text-white text-xs">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block bg-yellow-400" />
                  <span>Medium Priority</span>
                </div>
              </aside>
            </div>
          </div>

          {/* Risk Drivers Section */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg md:text-xl font-extrabold text-white m-0">
              Top Risk Drivers
            </h2>
            <p className="text-gray-400 text-xs md:text-sm m-0 mb-2">
              Key risks requiring leadership oversight this quarter
            </p>

            <div className="flex flex-col gap-2.5">
              {topRiskDrivers.map((driver, index) => {
                const IconComponent = getIconComponent(driver.title);
                return (
                  <div
                    key={index}
                    className="bg-[#1a1b1f] border border-[#26282d] rounded-lg p-3 md:p-3.5 flex items-start gap-3 shadow-md"
                  >
                    <div
                      className={`grid place-items-center w-8 h-8 rounded-lg bg-[#111319] flex-shrink-0 ${getAccentClass(
                        driver.title
                      )}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-0.5 flex-1">
                      <h3 className="text-sm md:text-[0.95rem] font-extrabold text-white m-0">
                        {driver.title}
                      </h3>
                      <p className="text-xs md:text-[0.8rem] text-gray-400 m-0 leading-snug">
                        {driver.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipRiskDashboard;
