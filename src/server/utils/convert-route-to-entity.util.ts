const mapping: Record<string, string> = {
  colleges: 'college',
  exams: 'exam',
  notices: 'notice',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
