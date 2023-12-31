import {
AGENTS_PAGE
  } from '../../../pageobjects/wzd/agents/agents.page';
  
  export const AGENT_MODULES = {
    'Security Events': AGENTS_PAGE['agSecurityEventsLink'],
    'Integrity Monitoring': AGENTS_PAGE['agIntegrityMonitoringLink'],
    'SCA': AGENTS_PAGE['agSCALink'],
    'System Auditing': AGENTS_PAGE['agSystemAuditingLink'],
    'Vulnerabilities': AGENTS_PAGE['agVulnerabilitiesLink'],
    'Mitre & Attack': AGENTS_PAGE['agMitreAttackLink'],
    'Policy Monitoring': AGENTS_PAGE['agPolicyMonitoring'],
    'PCIDSS': AGENTS_PAGE['agPCIDSS'],
    'NIST': AGENTS_PAGE['agNIST'],
    'TSC': AGENTS_PAGE['agTSC']
  }