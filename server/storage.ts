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
        name: "Maya Chen",
        genre: "R&B/Soul",
        achievement: "Grammy-nominated artist with 3 platinum albums",
        streams: "100M+ streams",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      },
      {
        name: "Alex Rivera",
        genre: "Hip-Hop",
        achievement: "Billboard Top 10 hits and sold-out world tour",
        streams: "250M+ streams",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      },
      {
        name: "Luna Martinez",
        genre: "Pop/Electronic",
        achievement: "Multi-platinum debut album and international recognition",
        streams: "180M+ streams",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      ...insertMessage,
      id,
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
