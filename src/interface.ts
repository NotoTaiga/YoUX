export interface pageState {
  pageId: number;
  pageName: string;
}

export interface targetStory {
  student?: string[];
  teacher?: string[];
  admin?: string[];
  other?: string[];
  all?: string[];
}

export interface dataSet {
  id: number;
  name: string;
  place: string[];
  target: string[];
  targetStory: targetStory;
  usetech: string[];
  text: string[];
  img: any;
  child: string[];
}

export interface rowData {
  name: string;
  place: string;
  target: string;
  child: string;
  explanation: string;
}

export interface category {
  category: string;
  categoryTitle: string;
  select: string[];
  selectText: string;
  filterText: string[];
}

export interface categoryFilter {
  place: string[];
  target: string[];
  child: string[];
  explanation: string[];
  targetStory: string[];
  usetech: string[];
}

export interface filterCont {
  filterText: string[]
  filterCategory: category[]
}