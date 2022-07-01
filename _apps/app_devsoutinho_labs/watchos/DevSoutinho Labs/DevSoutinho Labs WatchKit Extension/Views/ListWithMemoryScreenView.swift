//
//  ListWithMemoryScreenView.swift
//  DevSoutinho Labs WatchKit Extension
//
//  Created by Mario Souto on 01/07/22.
//

import SwiftUI

struct Note: Identifiable, Codable {
    let id: UUID
    let text: String
}

struct ListWithMemoryScreenView: View {
    @State private var notes: [Note] = [Note]()
    
    func getDocumentDirectory() -> URL {
        let path = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
        return path[0]
    }
    
    func save() {
        // dump(notes)
        do {
            let data = try JSONEncoder().encode(notes)
            let url = getDocumentDirectory().appendingPathComponent("notes")
            try data.write(to: url)
        } catch {
            print("Saving data has failed!")
        }
    }
    
    func load() {
        DispatchQueue.main.async {
            do {
                let url = getDocumentDirectory().appendingPathComponent("notes")
                let data = try Data(contentsOf: url)
                notes = try JSONDecoder().decode([Note].self, from: data)

            } catch {
             // Do nothing
            }
        }
        
    }
    
    func delete(offsets: IndexSet) {
        withAnimation {
            notes.remove(atOffsets: offsets)
            save()
        }
    }
    
    var body: some View {
        VStack {
            Text("Total Notes \(notes.count)")
                .onTapGesture {
                    let note = Note(id: UUID(), text: "New Item")
                    notes.append(note)
                    save()
                }
            List {
                ForEach(0..<notes.count, id: \.self) { i in
                    HStack{
                        Capsule()
                            .frame(width: 4)
                            .foregroundColor(.accentColor)
                        Text(notes[i].text)
                            .lineLimit(1)
                            .padding(.leading, 5)
                        
                    }
                }
                .onDelete(perform: delete)
            }
        }
        .onAppear(perform: {
            load()
        })
    }
}

struct ListWithMemoryScreenView_Previews: PreviewProvider {
    static var previews: some View {
        ListWithMemoryScreenView()
    }
}
