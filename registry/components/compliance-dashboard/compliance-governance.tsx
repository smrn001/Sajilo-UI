'use client';

import React, { useMemo } from 'react';

interface ComplianceFramework {
  name: string;
  color: string;
  segmentLength: number;
  offset: number;
}

interface GovernanceItem {
  iconPath: string;
  title: string;
  description: string;
}

const ComplianceGovernanceDashboard = () => {
  // Constants for SVG donut calculations
  const CIRC = 2 * Math.PI * 100; // ~628.319

  // Get framework color based on name
  const getFrameworkColor = (name: string): string => {
    const colorMap: Record<string, string> = {
      'ISO 27001': '#41C463',
      'PCI DSS': '#3EA0FF',
      NIST: '#A6A6A6',
      'SOC 2': '#F6C61A',
    };

    for (const [key, color] of Object.entries(colorMap)) {
      if (name.includes(key)) {
        return color;
      }
    }
    return '#A6A6A6';
  };

  // Compute compliance frameworks
  const complianceFrameworks: ComplianceFramework[] = useMemo(() => {
    // Mock data - in production, this would come from your store/API
    const frameworksToUse = [
      { name: 'ISO 27001', percentage: 100, color: '#41C463' },
      { name: 'PCI DSS', percentage: 100, color: '#3EA0FF' },
      { name: 'NIST', percentage: 100, color: '#A6A6A6' },
      { name: 'SOC 2', percentage: 100, color: '#F6C61A' },
    ];

    let cumulativeOffset = 0;
    return frameworksToUse.map((framework) => {
      const segmentLength = (framework.percentage / 100) * CIRC;
      const offset = -cumulativeOffset;
      cumulativeOffset += segmentLength;

      return {
        name: framework.name,
        color: framework.color,
        segmentLength,
        offset,
      };
    });
  }, [CIRC]);

  // Compute audit logs and policies updated
  const auditLogs = 247;
  const policiesUpdated = 15;

  // Compute governance items
  const governanceItems: GovernanceItem[] = useMemo(() => {
    return [
      {
        iconPath: 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
        title: 'ISO 27001:2022 Controls',
        description: 'All 93 controls implemented and maintained',
      },
      {
        iconPath: 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
        title: 'PCI DSS v4.0 Readiness',
        description: 'Audit scheduled Q1 2025 • Full compliance verified',
      },
      {
        iconPath:
          'M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm9 1.5V8h4.5L15 3.5z',
        title: 'AI-Generated Policy Documents',
        description: '12 new policies created by Mokshya AI this month',
      },
      {
        iconPath:
          'M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.75-12h-1.5v5.25l4.5 2.7.75-1.23-3.75-2.22V8z',
        title: 'Continuous Monitoring',
        description: '24/7 compliance validation across all frameworks',
      },
    ];
  }, []);

  return (
    <div className="flex gap-5 flex-wrap flex-col justify-stretch min-w-[780px] bg-[#0d0d0f] p-6">
      {/* Compliance Donut Chart Card */}
      <div className="bg-[#121215] rounded-2xl p-5 flex-1 min-w-[320px] shadow-[0_1px_0_rgba(255,255,255,0.03),_0_12px_30px_rgba(0,0,0,0.35)] flex flex-col">
        <h2 className="text-xl md:text-[1.35rem] font-extrabold tracking-[0.2px] text-white mt-0.5 mb-1.5">
          Multi-Framework Compliance Status
        </h2>
        <div className="text-base md:text-[0.98rem] text-[#9fa0a6] mb-4">
          Real-time compliance monitoring across regulatory frameworks
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-9">
          {/* Donut SVG */}
          <svg
            className="w-[320px] h-[320px] lg:w-[320px] lg:h-[320px] md:w-[260px] md:h-[260px] block mx-auto lg:mx-0"
            viewBox="0 0 260 260"
            aria-label="Compliance distribution donut"
          >
            {/* rotate so arcs start at 12 o'clock */}
            <g transform="rotate(-90 130 130)">
              {complianceFrameworks.map((framework, index) => (
                <circle
                  key={index}
                  cx="130"
                  cy="130"
                  r="100"
                  fill="none"
                  stroke={framework.color}
                  strokeLinecap="round"
                  strokeWidth="34"
                  strokeDasharray={`${framework.segmentLength} ${CIRC}`}
                  strokeDashoffset={framework.offset}
                />
              ))}
            </g>
            {/* inner cutout to get a thicker ring */}
            <circle cx="130" cy="130" r="78" fill="#18181b" />
          </svg>

          {/* Legend */}
          <div className="flex flex-col gap-[18px] text-white text-base md:text-[1.06rem] items-start lg:items-start md:items-center">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="flex items-center gap-3">
                <span
                  className="w-[18px] h-[18px] rounded-full shadow-[inset_0_0_0_2px_rgba(255,255,255,0.08)]"
                  style={{ background: framework.color }}
                />
                <span>{framework.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Governance Card */}
      <div className="bg-[#121215] rounded-2xl p-5 flex-1 min-w-[320px] shadow-[0_1px_0_rgba(255,255,255,0.03),_0_12px_30px_rgba(0,0,0,0.35)] flex flex-col">
        <h2 className="text-xl md:text-[1.35rem] font-extrabold tracking-[0.2px] text-white mt-0.5 mb-1.5">
          Policy Management &amp; Audit Readiness
        </h2>
        <div className="text-base md:text-[0.98rem] text-[#9fa0a6] mb-4">
          Governance activities and compliance evidence
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 gap-3.5 my-1.5 mb-3">
          <div
            className="rounded-[14px] bg-[#0f2a12] p-4 pb-3.5 text-center"
            role="status"
            aria-label="Audit Logs Achieved"
          >
            <div className="text-[2.1rem] leading-none font-extrabold tracking-[0.3px] text-[#41c463]">
              {auditLogs}
            </div>
            <div className="text-[#d7d9de] text-base md:text-[1.02rem] mt-2">
              Audit Logs Achieved
            </div>
          </div>
          <div
            className="rounded-[14px] bg-[#0a1326] p-4 pb-3.5 text-center"
            role="status"
            aria-label="Policies Updated"
          >
            <div className="text-[2.1rem] leading-none font-extrabold tracking-[0.3px] text-[#3ea0ff]">
              {policiesUpdated}
            </div>
            <div className="text-[#d7d9de] text-base md:text-[1.02rem] mt-2">
              Policies Updated
            </div>
          </div>
        </div>

        {/* Governance List */}
        <div className="flex flex-col gap-3 mt-1">
          {governanceItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[18px_1fr] items-start gap-x-2.5"
            >
              <svg
                className="text-[#41c463]"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path fill="currentColor" d={item.iconPath} />
              </svg>
              <div>
                <div className="text-white text-base md:text-[1.02rem] font-bold">
                  {item.title}
                </div>
                <div className="text-[#9fa0a6] text-sm md:text-[0.95rem] mt-0.5">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceGovernanceDashboard;
