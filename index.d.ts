export interface Session {
  session_id: string;
  embed_url: string;
  admin_token: string;
  termination_date?: string;
}

export interface CreateSessionBody {
  start_url?: string;
  kiosk?: boolean;
  offline_timeout?: number | null;
  control_disable_default?: boolean;
  region?: "NA" | "EU" | "AS";
  profile?: { load?: string; save?: boolean };
  ublock?: boolean;
  extension?: { field: string };
  webgl?: boolean;
  width?: number;
  height?: number;
  fps?: number;
  hide_cursor?: boolean;
}

export interface CreateSessionResponse extends Session {}

export interface DeleteSessionResponse {
  session_id: string;
}

export interface GetActiveSessionsResponse {
  results: { id: string; creation_date: string }[];
  next: string;
}

export interface GetSessionResponse {
  session_id: string;
  embed_url: string;
  admin_token: string;
  termination_date: string | null;
}

export type PermissionData = {
  priority: number;
  idle_timeout: number;
  control_disabled: boolean;
  control_exclusive: boolean;
};
