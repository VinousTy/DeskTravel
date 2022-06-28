export interface File extends Blob {
  readonly lastModified: string;
  readonly name: string;
}

export interface AUTH_STATE {
  signIn: boolean;
  isLoadingAuth: boolean;
  isEmail: boolean;
  isNotEmail: boolean;
  category: {
    id: string;
    name: string;
  }[];
  myprofile: {
    id: string;
    name: string;
    user_name: string;
    self_introduction: string;
    category: string;
    userProfile: string;
    created_on: string;
    img: any;
  };
  profiles: {
    id: string;
    name: string;
    user_name: string;
    self_introduction: string;
    category: string;
    userProfile: string;
    created_on: string;
    img: any;
  }[];
}

export interface PROPS_AUTHEN {
  email: string;
  password: string;
}

export interface POST_EMAIL {
  email: string;
}

export interface USER_ID {
  id: string;
}

export interface NEW_PASSWORD {
  password: string;
  token: string | null;
}

export interface PROPS_PROFILE {
  id: string;
  name: string;
  user_name: string;
  self_introduction: string;
  category: string;
  img: any;
}

export interface PROPS_NAME {
  name: string;
}

export interface PROPS_PROFILELIST {
  id: string;
  name: string;
  user_name: string;
  self_introduction: string;
  img: any;
}

export interface POST_STATE {
  isDrawer: boolean;
  isOpen: boolean;
  isEditOpen: boolean;
  isDeleteOpen: boolean;
  isMonitor: boolean;
  isComputer: boolean;
  isKeyboard: boolean;
  isMouse: boolean;
  isSpeaker: boolean;
  isTable: boolean;
  isChair: boolean;
  isOther: boolean;
  isLoadingPost: boolean;
  post: {
    id: string;
    body: string;
    userPost: string;
    created_on: string;
    bookmark: string[];
    liked: string[];
  }[];
  posts: {
    id: string;
    body: string;
    userPost: string;
    created_on: string;
    bookmark: string[];
    liked: string[];
  }[];
  img: {
    id: string;
    img: any;
    postId: string;
  }[];
  monitor: {
    id: string;
    name: string;
    postId: string;
  }[];
  computer: {
    id: string;
    name: string;
    postId: string;
  }[];
  keyboard: {
    id: string;
    name: string;
    postId: string;
  }[];
  mouse: {
    id: string;
    name: string;
    postId: string;
  }[];
  speaker: {
    id: string;
    name: string;
    postId: string;
  }[];
  table: {
    id: string;
    name: string;
    postId: string;
  }[];
  chair: {
    id: string;
    name: string;
    postId: string;
  }[];
  other: {
    id: string;
    name: string;
    postId: string;
  }[];
  comments: {
    id: string;
    body: string;
    userComment: string;
    postId: string;
  }[];
}

export interface NEW_POST {
  id: string;
  body: string;
}

export interface POST_BODY {
  body: string;
}

export interface POST_ID {
  id: string;
}

export interface POST_LIKED {
  id: string;
  body: string;
  current: string[];
  current_bookmark: string[];
  new: string;
  new_bookmark: string;
}

export interface POST_BOOKMARK {
  id: string;
  body: string;
  current: string[];
  current_bookmark: string[];
  new: string;
  new_bookmark: string;
}

export interface POST_COMMENT {
  body: string;
  postId: string;
}

export interface POST_IMAGE {
  img: any;
  postId: any;
}

export interface UPDATE_IMAGE {
  id: string;
  img: any;
  postId: any;
}

export interface POST_ITEM {
  name: string[];
  postId: any;
}

export interface UPDATE_ITEM {
  id: string;
  name: string[];
  postId: any;
}

export interface PROPS_POST_LIST {
  postId: string;
  loginId: string;
  userPost: string;
  body: string;
  liked: string[];
  bookmark: string[];
}

export interface PROPS_POST_DETAIL {
  id: string;
  postId: string;
  loginId: string;
  userPost: string;
  body: string;
  liked: string[];
  bookmark: string[];
}
