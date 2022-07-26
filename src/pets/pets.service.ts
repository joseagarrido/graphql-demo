import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  async finfAll(): Promise<Pet[]> {
    const pet = new Pet();
    pet.id = 1;
    pet.name = 'Carpin';
    return [pet];
  }
}
