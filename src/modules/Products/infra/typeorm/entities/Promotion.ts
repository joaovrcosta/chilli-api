import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("promotions")
export class Promotion {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  compre: number;

  @Column()
  pague: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
