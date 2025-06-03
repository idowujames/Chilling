import { contactMessages, artists, type ContactMessage, type InsertContactMessage, type Artist, type InsertArtist, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getArtists(): Promise<Artist[]>;
  createArtist(artist: InsertArtist): Promise<Artist>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private artists: Map<number, Artist>;
  private currentUserId: number;
  private currentContactId: number;
  private currentArtistId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.artists = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentArtistId = 1;

    // Seed with some artists
    this.seedArtists();
  }

  private seedArtists() {
    const sampleArtists: InsertArtist[] = [
      {
        name: "T-Classic",
        genre: "Afrobeats",
        achievement: "Breakout hit 'Fall in Love' - major streaming success",
        streams: "50M+ streams",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      },
      {
        name: "Spyro",
        genre: "Afrobeats",
        achievement: "Multiple breakout songs and UK tour success",
        streams: "40M+ streams",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      },
      {
        name: "Baby Boy AV",
        genre: "Hip-Hop/Rap",
        achievement: "Hit single 'Big Thug Boys' and international recognition",
        streams: "30M+ streams",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      },
      {
        name: "Teni",
        genre: "Afropop",
        achievement: "Headline shows across Nigeria and UK tours",
        streams: "100M+ streams",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      },
      {
        name: "Kida Kudz",
        genre: "Afrobeats/Hip-Hop",
        achievement: "Successful headline show in Ibadan and UK presence",
        streams: "25M+ streams",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      },
      {
        name: "Victor AD",
        genre: "Afrobeats",
        achievement: "Headline show in Warri and growing fanbase",
        streams: "35M+ streams",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      },
    ];

    sampleArtists.forEach((artist) => {
      this.createArtist(artist);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const message: ContactMessage = {
      id,
      name: insertMessage.name,
      email: insertMessage.email,
      genre: insertMessage.genre || null,
      experience: insertMessage.experience || null,
      message: insertMessage.message,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getArtists(): Promise<Artist[]> {
    return Array.from(this.artists.values());
  }

  async createArtist(insertArtist: InsertArtist): Promise<Artist> {
    const id = this.currentArtistId++;
    const artist: Artist = { ...insertArtist, id };
    this.artists.set(id, artist);
    return artist;
  }
}

export const storage = new MemStorage();
